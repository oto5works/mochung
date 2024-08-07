
1.
v-text-filed에 
@blur="checkDuplicate(initialData.url)"
이것을 넣으면 텍스트를 칠때마다 함수 실행.

2. 원하는 영역에 스크롤 이벤트 걸기.
mounted() {
    const wrapElement = document.querySelector('.app-content__wrap');
    wrapElement.addEventListener('scroll', this.handleScroll);
    this.handleScroll(); // 초기 로딩시 한 번 호출
  },

  beforeDestroy() {
    const wrapElement = document.querySelector('.app-content__wrap');
    wrapElement.removeEventListener('scroll', this.handleScroll);
  }

  3. 라인 할떄 사용
  <div v-if="comment.fnComment === 'true'" class="v-hr --display_block-none-block opacity_50" />


  4. edit item 예시.
  <div class="edit-item" v-bind="props">
    <div class="edit-item__wrap">
      <icon icon="image"><image /></icon>
      <span>응답하기</span>
    </div>
    <div class="edit-item__content">응답하기</div>          
  </div>


  5. saveValue 할때
  saveValue() {
    // Update the initialData.title with the current value of this.title
    this.$emit('update:transports', this.transportItem);

    // Close the dialog
    this.dialog = false;
  }

  6. vuex를 통한 업로드 방법.

  import { mapActions } from 'vuex';

  methods: {
    ...mapActions(['updateFormDataAction']),
    saveValue() {
      // orders는 실제로는 state.postData.formData.orders 이다.
      const updateData = {
        orders: this.defaultOrders,
      };
      this.updateFormDataAction(updateData);

      // Close the dialog
      this.dialog = false;
    }
}


7. {{ type }} 설정 부분에 등록방법
computed: {
  type() {
    if (this.isConfirmed.commentPassword === false) {
      return '필수 사항';
    } else {
      return this.showPassword ? this.comment.password : '⦁⦁⦁⦁' // '*'로 가리기
    }
  },
},

8. 자식요소에서 부모요소 업데이트 할경우
<!-- 자식요소 -->
this.$emit('update:selected', option.value);

<!-- 부모요소 -->
<fnSelect
      options="effectStyle"
      :selected="formData.initialData.effect.config"
      @update:selected="formData.initialData.effect.config = $event"
  />


9. 토글 기능
toggleFunction() {
  this.calendar.fnCountdown = !this.calendar.fnCountdown;
},

10. 버튼 바뀐것
<v-card-actions class="gap_8">
  <v-spacer></v-spacer>
  <button class="button-select height_36 pa_24" variant="text" @click="dialog = false"><span>취소</span></button>
  <button class="button-select selected height_36 pa_24" variant="text" @click="saveValue"><span>확인</span></button>
</v-card-actions>

11. 깃허브 주소
mask-image: url('https://jwpggit.github.io/storage/image/card/checkbox.svg');

12. save 버튼
import { mapGetters, mapActions } from 'vuex';

...mapActions({saveFormData:'saveFormData'}),
submitPost() {
  console.log ('스타트')
  this.saveFormData()
    .then(() => {
      console.log ('성공')
    })
    .catch(error => {
      console.log ('실패')
      console.error('Error saving form data:', error);
    });
},

submitPost() {
  console.log ('스타트')
  this.saveFormData()
    .then(() => {
      console.log ('성공')
      //this.resetFormDataAction()
      this.$router.push({ name: 'archive' });
    })
    .catch(error => {
      console.log ('실패')
      console.error('Error saving form data:', error);
    });
},

13. 애니메이션
-webkit-transition: all .25s ease;
transition: all .25s ease;

14. scss에 지정해두고 사용방법

@mixin background-gradient {
  background-image: linear-gradient(90deg, var(--primary-color) 0px, var(--primary-on) 40px, var(--primary-color) 80px);
  background-size: 600px;
}

.gallery_grid__content {
  @include background-gradient;
}



15. svg 애니메이션 방법 SMIL

<svg
      version="1.1"
      id="레이어_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 256 256"
      style="enable-background: new 0 0 256 256"
      xml:space="preserve"
    >
      <!-- 1번 애니메이션 -->
      <path class="st0">
        <animate
          attributeName="d"
          dur="3s"
          repeatCount="indefinite"
          values="
1번
          M114,60.5c-2-4.9,3.8-9,6.9-10.9c4.7-2.9,9.8-8.6,9.9-10.8c0.3-5.5-5.5-5.9-2-10.9c2.3-3.2,5.9-6.8,6.9-10.9
	 M119.7,60.5c4.5-2.6-2.1-6.4,6.5-10.9c5.9-3,12.1-4.5,12.5-10.8c0.3-6.5-3.3-8-3-10.9c0.4-5.2,4.7-7.8,6.2-10.9;

   2번
   M114,60.5c-2-4.9,3.8-9,6.9-10.9c4.7-2.9,9.4-8.6,9.9-10.8c1.1-5.4-5.5-6.2-2.5-10.9c2.4-3.6,6.4-6.8,7.3-10.9
	 M119.7,60.5c4.5-2.6-2.1-6.4,6.5-10.9c5.9-3,11.8-5.5,12.5-10.8c0.7-5.4-2.3-7.1-3-10.9c-0.8-4.1,5.2-5.4,6.2-10.9;

   3번
   M114,60.5c-1.5-4.7,1.5-9.4,4.2-10.9c6.3-3.5,12.9-6.4,14.8-10.8c2.4-5.4-4.6-6.7-5.3-10.9
	c-0.5-3,5.6-7.1,8-10.9 M119.7,60.5c7.8-2.9,1.6-7.7,4.2-10.9c1.6-2,13-6.2,15.7-10.8c2-3.4,1.2-7.2-2.9-10.9
	c-3.3-2.9-1.3-6.3,4.9-10.9;

  4번
  M114,60.5c-1.5-4.7,1.4-9.6,4.2-10.9c8.1-3.6,12.5-5.9,14.8-10.8c2.5-5.4-5.2-7.5-5.3-10.9
	c-0.1-3.1,5.6-7.1,8-10.9 M119.7,60.5c7.8-2.9,1.6-7.7,4.2-10.9c1.6-2,13-6.2,15.7-10.8c2-3.4,1.3-7.4-2.9-10.9
	c-3.6-3-1.3-6.3,4.9-10.9;
이런식으로 svg path 추가한다.


  "
        />
      </path>

      <!-- 나머지 path 요소들을 추가하고 위와 같은 방식으로 animate 요소를 추가해줍니다. -->
    </svg>