/*-- wordData.js --*/
import { GoogleGenerativeAI, SchemaType } from "@google/generative-ai";

export default {
  // State
  state: {
    loading: false,
    result: null,
    error: null,
  },
  // Mutations
  mutations: {
    SET_ERROR(state, error) {
      state.error = error;
    },
    CLEAR_ERROR(state) {
      state.error = null;
    },
    START_LOADING(state) {
      state.loading = true;
    },
    STOP_LOADING(state) {
      state.loading = false;
    },
    SET_RESULT(state, result) {
      state.result = result;
    },
  },
  // Actions
  actions: {
    async generateAIDesign({ commit, state }, selectedOptions) {
      commit("CLEAR_ERROR");
      commit("START_LOADING");
      console.log("generate START!");
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
      const genAI = new GoogleGenerativeAI(apiKey); // Use environment variable for API key
      console.log("Using API Key:", apiKey);

      // Define schema
      const schema = {
        description: "Design options for mobile wedding invitations",
        type: SchemaType.OBJECT,
        properties: {
          customData: {
            type: SchemaType.OBJECT,
            properties: {
              backgroundColor: {
                type: SchemaType.ARRAY,
                items: { type: SchemaType.NUMBER },
                description: "Background color in [r, g, b] format. Use a variety of colors (e.g., red, green, blue, yellow) instead of just white.",
                nullable: false,
            },
              design: {
                type: SchemaType.STRING,
                description:
                  "Overall design feel, focusing on aesthetics and user experience.",
                nullable: false,
                enum: [
                  "design1", // Basic design with an intuitive and clean layout.
                  "design2", // Card-style design that separates sections into distinct cards for visual clarity.
                  "design3", // Line-based design that organizes buttons and elements with lines to emphasize minimalism.
                ],
              },
              align: {
                type: SchemaType.STRING,
                description: "Text alignment",
                nullable: false,
                enum: [
                  "left", // Stable and easy to read.
                  "center", // Emphasizes balance and visibility.
                  "right", // Elegant and unique feel.
                ],
              },
              primaryColor: {
                type: SchemaType.ARRAY,
                items: { type: SchemaType.NUMBER },
                description: "Button and accent color in [r, g, b] format",
                nullable: false,
              },
              radius: {
                type: SchemaType.STRING,
                description: "Border radius for buttons",
                nullable: false,
                enum: [
                  "0", // (No border-radius applied for 0)
                  "1", // Slightly rounded
                  "2", // Moderately rounded
                  "3", // Highly rounded
                ],
              },
              border: {
                type: SchemaType.BOOLEAN,
                description:
                  "Apply a border of the 'primaryColor' to the button or component, while excluding the background color of the button.",
                nullable: false,
              },
              shadow: {
                type: SchemaType.BOOLEAN,
                description:
                  "Apply shadow to the button or component. In the case of card design, apply shadow to the card",
                nullable: false,
              },
              fontSize: {
                type: SchemaType.STRING,
                description: "Size of the font",
                nullable: false,
                enum: [
                  "1", // Small (Minimalism)
                  "2", // Medium (Balance)
                  "3", // Large (Emphasis)
                ],
              },
              fontWeight: {
                type: SchemaType.STRING,
                description: "Weight of the font",
                nullable: false,
                enum: ["light", "medium", "bold"],
              },
              fontColor: {
                type: SchemaType.ARRAY,
                items: { type: SchemaType.NUMBER },
                description: "Font color in [r, g, b] format",
                nullable: false,
              },
              fontFamily: {
                type: SchemaType.STRING,
                description: "Font family to use",
                nullable: false,
                enum: [
                  "pretendard", // Modern Font, Minimalism and Elegance.
                  "noto serif kr", // Elegant Font, Soft and Traditional.
                  "gmarket sans", // Modern Font, Casual and Friendly.
                ],
              },
              stamp: {
                type: SchemaType.STRING,
                description: "Illustrative stamp for each section",
                nullable: true,
                enum: [
                  null, // No stamp selected, representing simplicity and minimalism
                  "lily", // Elegance, purity, simplicity
                  "rose", // Love, passion, beauty
                  "daisy", // Innocence, new beginnings, cheerfulness
                ],
              },
              homeStyle: {
                type: SchemaType.STRING,
                description: "Style of the invitation",
                nullable: false,
                enum: [
                  "minimalChic", // #Modern #MinimalWedding #CleanInvitation
                  "classicElegance", // #ModernInvitation #Simplicity #TrendyDesign
                  "modernSimplicity", // #Modern #MinimalWedding #CleanInvitation #ElegantDesign
                  "welcomingWarmth", // #WarmFeelings #EmotionalInvitation #Welcome
                  "elegantFlow", // #Elegance #PremiumDesign #SimpleInvitation
                ],
              },
            },
            required: [
              "backgroundColor",
              "design",
              "align",
              "primaryColor",
              "radius",
              "fontSize",
              "fontWeight",
              "fontColor",
              "fontFamily",
              "homeStyle",
            ],
          },
        },
        required: ["customData"],
      };

      const model = genAI.getGenerativeModel({
        model: "gemini-1.5-flash",
        generationConfig: {
          responseMimeType: "application/json",
          responseSchema: schema,
        },
      });

      // Construct prompt
      const prompt = `${selectedOptions.join(
        ", "
      )} mobile wedding invitation design.`;

      let retryCount = 0;
      const maxRetries = 3; // Maximum number of retries

      console.log("Command: ", prompt);
      while (retryCount < maxRetries) {
        try {
          const generateContent = await model.generateContent(prompt);
          const response = await generateContent.response.text();
          console.log(response);

          // Parse the response
          const result = JSON.parse(response);

          console.log("wordData:", result);
          commit("SET_RESULT", result);
          commit("STOP_LOADING");
          return; // Exit the loop if successful
        } catch (error) {
          console.error("Error occurred:", error);
          commit("SET_ERROR", error.message); // Update error state
          retryCount++;

          // Retry only for specific errors (like 503)
          if (error.message.includes("503")) {
            console.log(`Retrying ${retryCount} time(s)...`);
            await new Promise((resolve) => setTimeout(resolve, 2000)); // Wait 2 seconds
          } else {
            commit("STOP_LOADING");
            throw error; // Re-throw other errors
          }
        }
      }

      // Handle max retries exceeded
      console.error("Max retry count exceeded");
      commit("SET_ERROR", "Max retry count exceeded"); // Update error state
      commit("STOP_LOADING"); // Update loading state
    },
  },
  // Getters
  getters: {
    getGeminiLoading: (state) => state.loading,
    getGeminiError: (state) => state.error,
    getGeminiResult: (state) => state.result,
  },
};
