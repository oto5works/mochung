import { getComment, createComment, deleteComment } from "@/services/comments";

export default {
  state: {
    commentsByArchiveId: {
      test: [
        {
          id: 0,
          writer: "Host",
          password: "1234",
          content: "로그인한 사용자가 방명록에 댓글을 작성하면, 다음과 같은 형식으로 댓글이 표시됩니다.",
          dateCreate: "2024-08-30",
          isWriter: true
        },
        {
          id: 1,
          writer: "GuestUser",
          password: "1234",
          content: "게스트가 방명록에 댓글을 작성하면, 댓글은 다음과 같은 형식으로 표시됩니다.",
          dateCreate: "2024-08-30",
          isWriter: false
        },
        {
          id: 1,
          writer: "GuestUser",
          password: "1234",
          content: "여기서 댓글을 입력해보세요.",
          dateCreate: "2024-08-30",
          isWriter: false
        },
      ],
    },
  },
  mutations: {
    updateComments(state, { archiveId, comments }) {
      // Update comments for the specific archive ID
      state.commentsByArchiveId = {
        ...state.commentsByArchiveId,
        [archiveId]: comments,
      };
    },
    deleteTestComment(state, { archiveId, id }) {
      const updatedComments = state.commentsByArchiveId[archiveId].filter(comment => comment.id !== id);
      state.commentsByArchiveId = {
        ...state.commentsByArchiveId,
        [archiveId]: updatedComments,
      };
    },
  },
  actions: {
    /*-- 불러오기 --*/
    async fetchComments(context, archiveId) {
      try {
        const response = await getComment(archiveId); // Make sure 'getComment' accepts archiveId
        const comments = response.comments;
        context.commit("updateComments", { archiveId, comments });
      } catch (error) {
        console.error("Error fetching comments:", error);
        throw error;
      }
    },

    /*-- 저장 --*/
    async submitCommentAction(context, data) {
      const id = data.post_id;
      try {
        if (id !== undefined && id !== null) {
          console.log("id가 있으면 댓글 저장 로직 실행??");
          // id가 있으면 댓글 저장 로직 실행
          await context.dispatch("saveComment", data);
        } else {
          // id가 없으면 가상 id를 생성하여 사용하고 저장 로직 실행
          await context.dispatch("saveTestComment", data);
          console.log(
            "id가 없으면 가상 id를 생성하여 사용하고 저장 로직 실행??dhkstjd"
          );
        }
      } catch (error) {
        console.error("Error saving form data:", error);
        throw error;
      }
    },
    async saveComment(context, data) {
      try {
        await createComment(data);
        // 저장 후 다시 댓글 가져오기
        await context.dispatch("fetchComments", data.post_id);
      } catch (error) {
        console.error("댓글 저장 중 에러 발생:", error);
        throw error;
      }
    },
    async saveTestComment(context, data) {
      try {
        // Increment the counter for the test comments
        const lastTestId = context.state.commentsByArchiveId.test.reduce((maxId, comment) => {
          return Math.max(maxId, comment.id || 0);
        }, 0);
  
        // Generate a new ID by incrementing the last used ID
        const newTestId = lastTestId + 1;
  
        // Save the test comment with the new ID and "user" status
        const testComment = {
          ...data,
          id: newTestId,
          dateCreate: new Date().toISOString(), // Adding the current time
        };
  
        context.commit("updateComments", {
          archiveId: "test",
          comments: [...context.state.commentsByArchiveId.test, testComment],
        });
  
        console.log("테스트용 댓글 저장 완료");
      } catch (error) {
        console.error("테스트용 댓글 저장 중 에러 발생:", error);
        throw error;
      }
    },

    /*-- 삭제 --*/
    async handleDeleteAction(context, data) {
      console.log ('whffu', data.post_id)
      const id = data.post_id;
      try {
        if (id !== undefined && id !== null) {
          console.log("d가 있으면 댓글 저장 로직 실행??");
          // id가 있으면 댓글 저장 로직 실행
          await context.dispatch("deleteComment", data);
        } else {
          // id가 없으면 가상 id를 생성하여 사용하고 저장 로직 실행
          await context.dispatch("deleteTestComment", data);
          console.log(
            "id가 없으면 가상 id를 생성하여 사용하고 저장 로직 실행??dhkstjd"
          );
        }
      } catch (error) {
        console.error("Error delte form data:", error);
        throw error;
      }
    },
    async deleteComment(context, data) {
      try {
        await deleteComment(data.id, data);

        // Fetch comments again after deleting
        await context.dispatch("fetchComments", data.post_id);
      } catch (error) {
        throw error;
      }
    },
    async deleteTestComment(context, { id, password }) {
      try {
        const testComment = context.state.commentsByArchiveId.test.find(comment => comment.id === id);
  
        if (testComment && testComment.password === password) {
          context.commit("deleteTestComment", { archiveId: "test", id });
        } else {
          console.warn("비밀번호가 일치하지 않아 테스트용 댓글을 삭제할 수 없습니다.");
        }
      } catch (error) {
        console.error("Error deleting test comment:", error);
        throw error;
      }
    },
  },
  getters: {
    getCommentsForArchive: (state) => (archiveId) => {
      return state.commentsByArchiveId[archiveId] || [];
    },
  },
};
