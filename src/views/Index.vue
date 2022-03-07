<template>
  <div class="row g-0 mt-5">
    <div class="col-2"></div>
    <div class="col text-center">
      <h1>國際婦女節活動照片產生器</h1>
      <!-- <p class="text-danger">
        ※如用平板或手機製作，請先將瀏覽器設定為電腦版開啟再進行製作
      </p> -->
      <!-- <p>
        <img
          class="w-25"
          src="/activity-pic-tamplate-generator/img/toComputer.jpg"
          alt="toComputer.jpg"
        />
      </p> -->
    </div>
    <div class="col-2"></div>
  </div>
  <div class="row g-0 my-5">
    <div class="col-md col-1"></div>
    <div class="col-md col-10">
      <div class="mb-3">
        <label for="TitleInput" class="form-label">公司單位</label>
        <input v-model="title" class="form-control" id="TitleInput" placeholder="請輸入公司名稱" />
      </div>
      <div class="mb-3">
        <label for="NameInput" class="form-label">您的姓名</label>
        <input v-model="name" class="form-control" id="NameInput" placeholder="請輸入姓名" />
      </div>
      <div class="mb-3">
        <label for="ContentInput" class="form-label"
          >寫下對國際婦女節的支持或承諾（上限48字）</label
        >
        <input
          v-model="content"
          class="form-control"
          id="ContentInput"
          placeholder="寫下對國際婦女節的支持或承諾"
          maxlength="48"
        />
      </div>
      <div class="mb-3">
        <label for="formFile" class="form-label">上傳雙臂交叉的照片</label>
        <input class="form-control" type="file" id="formFile" @change="onFileChange" />
      </div>
    </div>
    <div class="col-md col-1"></div>
  </div>
  <div class="row g-0 mb-5">
    <div class="col-2"></div>
    <div class="col text-center">
      <h1>預覽圖片</h1>
      <p class="text-center text-danger">
        ※確認圖片後請使用螢幕截圖，再進行裁切，即可獲得您的專屬 social mediacard !!
      </p>
    </div>
    <div class="col-2"></div>
  </div>
  <div class="mb-5" ref="capture">
    <!-- width > 1400 px -->
    <div class="row g-0 mb-3 d-none d-xl-flex">
      <div class="col-2"></div>
      <div class="col position-relative text-white">
        <div class="container card-content w-40 h-75">
          <div class="row h-25 align-items-center text-center">
            <div class="col">
              <!-- <p class="m-0">
              <img class="logo" src="/img/abbott_logo.png" alt="abbott-logo.jpg" />
            </p> -->
              <span class="fs-l">{{ title }}</span>
            </div>
          </div>
          <div class="row h-65 align-items-center">
            <div class="col">
              <p class="text-start my-0"><i class="bi bi-quote fs-l"></i></p>
              <p class="text-center my-0 mx-3 fs-l">
                {{ content }}
              </p>
              <p class="trans-scale-inverse my-0">
                <i class="bi bi-quote fs-l"></i>
              </p>
            </div>
          </div>
          <div class="row h-10 align-items-end text-center">
            <div class="col">
              <span class="fs-l">{{ name }}</span>
            </div>
          </div>
        </div>
        <img v-if="imageUrl" class="img-headshot" :src="imageUrl" />
        <div
          class="bg-img-h13-w25"
          style="background-image: url(/activity-pic-tamplate-generator/img/abbott-bg.png);"
        ></div>
      </div>
      <div class="col-2"></div>
    </div>
    <!-- 1400px > width > 992px -->
    <div class="row g-0 mb-3 d-none d-lg-flex d-xl-none">
      <div class="col-2"></div>
      <div class="col position-relative text-white">
        <div class="container card-content w-40 h-75">
          <div class="row h-25 align-items-center text-center">
            <div class="col">
              <!-- <p class="m-0">
                <img class="logo" src="/img/abbott_logo.png" alt="abbott-logo.jpg" />
              </p> -->
              <span class="fs-l">{{ title }}</span>
            </div>
          </div>
          <div class="row h-65 align-items-center">
            <div class="col">
              <p class="text-start my-0"><i class="bi bi-quote fs-l"></i></p>
              <p class="text-center my-0 mx-3 fs-sl">
                {{ content }}
              </p>
              <p class="trans-scale-inverse my-0"><i class="bi bi-quote fs-l"></i></p>
            </div>
          </div>
          <div class="row h-10 align-items-end text-center">
            <div class="col">
              <span class="fs-l">{{ name }}</span>
            </div>
          </div>
        </div>
        <img v-if="imageUrl" class="img-headshot" :src="imageUrl" />
        <div
          class="bg-img-h13-w25"
          style="background-image: url(/activity-pic-tamplate-generator/img/abbott-bg.png);"
        ></div>
      </div>
      <div class="col-2"></div>
    </div>
    <!-- 992px > width > 768px -->
    <div class="row g-0 mb-3 d-none d-md-block d-lg-none">
      <div class="col-2"></div>
      <div class="col position-relative text-white">
        <div class="container card-content w-40 h-75">
          <div class="row h-25 align-items-center text-center">
            <div class="col">
              <!-- <p class="m-0">
                <img class="logo" src="/img/abbott_logo.png" alt="abbott-logo.jpg" />
              </p> -->
              <span class="fs-l">{{ title }}</span>
            </div>
          </div>
          <div class="row h-65 align-items-center">
            <div class="col">
              <p class="text-start my-0"><i class="bi bi-quote fs-l"></i></p>
              <p class="text-center my-0 mx-1 fs-l">
                {{ content }}
              </p>
              <p class="trans-scale-inverse my-0"><i class="bi bi-quote fs-l"></i></p>
            </div>
          </div>
          <div class="row h-10 align-items-end text-center">
            <div class="col">
              <span class="fs-l">{{ name }}</span>
            </div>
          </div>
        </div>
        <img v-if="imageUrl" class="img-headshot" :src="imageUrl" />
        <div
          class="bg-img-h13-w25"
          style="background-image: url(/activity-pic-tamplate-generator/img/abbott-bg.png);"
        ></div>
      </div>
      <div class="col-2"></div>
    </div>
    <!-- 992px > width > 576px -->
    <div class="row g-0 mb-3 d-none d-sm-block d-md-none">
      <div class="col-2"></div>
      <div class="col position-relative text-white">
        <div class="container card-content w-40 h-75">
          <div class="row h-25 align-items-center text-center">
            <div class="col">
              <!-- <p class="m-0">
                <img class="logo" src="/img/abbott_logo.png" alt="abbott-logo.jpg" />
              </p> -->
              <span class="fs-sl">{{ title }}</span>
            </div>
          </div>
          <div class="row h-65 align-items-center">
            <div class="col">
              <p class="text-start my-0"><i class="bi bi-quote fs-l"></i></p>
              <p class="text-center my-0 mx-1 fs-sl">
                {{ content }}
              </p>
              <p class="trans-scale-inverse my-0"><i class="bi bi-quote fs-l"></i></p>
            </div>
          </div>
          <div class="row h-10 align-items-end text-center">
            <div class="col">
              <span class="fs-sl">{{ name }}</span>
            </div>
          </div>
        </div>
        <img v-if="imageUrl" class="img-headshot" :src="imageUrl" />
        <div
          class="bg-img-h13-w25"
          style="background-image: url(/activity-pic-tamplate-generator/img/abbott-bg.png);"
        ></div>
      </div>
      <div class="col-2"></div>
    </div>
    <!-- 576px > width -->
    <div class="row g-0 mb-3 d-block d-sm-none">
      <div class="col-2"></div>
      <div class="col position-relative text-white">
        <div class="container card-content w-40 h-75">
          <div class="row h-25 align-items-center text-center">
            <div class="col">
              <!-- <p class="m-0">
                <img class="logo" src="/img/abbott_logo.png" alt="abbott-logo.jpg" />
              </p> -->
              <span class="fs-sl">{{ title }}</span>
            </div>
          </div>
          <div class="row h-65 align-items-center">
            <div class="col">
              <p class="text-start my-0"><i class="bi bi-quote fs-12"></i></p>
              <p class="text-center my-0 mx-1 fs-12">
                {{ content }}
              </p>
              <p class="trans-scale-inverse my-0"><i class="bi bi-quote fs-12"></i></p>
            </div>
          </div>
          <div class="row h-10 align-items-end text-center">
            <div class="col">
              <span class="fs-sl">{{ name }}</span>
            </div>
          </div>
        </div>
        <img v-if="imageUrl" class="img-headshot" :src="imageUrl" />
        <div
          class="bg-img-h13-w25"
          style="background-image: url(/activity-pic-tamplate-generator/img/abbott-bg.png);"
        ></div>
      </div>
      <div class="col-2"></div>
    </div>
  </div>
  <div class="mb-3">
    <div class="row g-0">
      <div class="col-md-3"></div>
      <div class="col-md-6 col btn btn-secondary btn-lg mx-md-3" @click="reset">重設</div>
      <!-- <div class="col-md-3 col btn btn-primary btn-lg mx-md-3" @click="generatorImage">
        下載圖片
      </div> -->
      <div class="col-md-3"></div>
    </div>
  </div>
</template>

<script>
import html2canvas from 'html2canvas';

export default {
  name: 'Home',
  data() {
    return {
      logo: Image,
      title: '國際婦女節',
      content: '身為女性，我們無所畏懼，我女力我驕傲。',
      name: '王小明',
      imageUrl: '',
    };
  },
  methods: {
    onFileChange(e) {
      const file = e.target.files[0];
      this.imageUrl = URL.createObjectURL(file);
    },
    generatorImage() {
      html2canvas(this.$refs.capture).then((canvas) => {
        const link = document.createElement('a');
        link.href = canvas.toDataURL();
        link.setAttribute('download', '國際婦女節.png');
        link.style.display = 'none';
        document.body.appendChild(link);
        link.click();
      });
    },
    toImage() {
      // 手動創建一個 canvas 標簽
      const canvas = document.createElement('canvas');
      // 獲取父標簽，意思是這個標簽內的 DOM 元素生成圖片
      // capture是給截圖范圍內的父級元素自定義的ref名稱
      const canvasBox = this.$refs.capture;
      // 獲取父級的寬高
      // eslint-disable-next-line radix
      const width = parseInt(window.getComputedStyle(canvasBox).width);
      // eslint-disable-next-line radix
      const height = parseInt(window.getComputedStyle(canvasBox).height);
      // 寬高 * 2 並放大 2 倍 是為瞭防止圖片模糊
      canvas.width = width * 2;
      canvas.height = height * 2;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      const context = canvas.getContext('2d');
      context.scale(2, 2);
      const options = {
        backgroundColor: null,
        canvas,
        useCORS: true,
      };
      // eslint-disable-next-line no-shadow
      html2canvas(canvasBox, options).then((canvas) => {
        // toDataURL 圖片格式轉成 base64
        const dataURL = canvas.toDataURL('image/png');
        console.log(dataURL);
        this.downloadImage(dataURL);
      });
    },
    // 下載圖片
    downloadImage(url) {
      // 如果是在網頁中可以直接創建一個 a 標簽直接下載
      const a = document.createElement('a');
      a.href = url;
      a.download = '首頁截圖';
      a.click();
    },
    reset() {
      this.title = '';
      this.content = '';
      this.name = '';
      this.imageUrl = '';
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bg-img-h13-w25 {
  background-repeat: no-repeat !important;
  background-size: cover !important;
  background-position: center !important;
  padding-top: 52%;
  image-rendering: pixelated;
}
.card-content {
  position: absolute;
  top: 40%;
  left: 22.5%;
  transform: translate(-50%, -50%);
  width: auto;
}
.img-headshot {
  position: absolute;
  top: 50%;
  left: 71%;
  transform: translate(-50%, -50%);
  max-width: 50%;
  max-height: 95%;
}
.w-40 {
  width: 40% !important;
}
.h-10 {
  height: 10% !important;
}
.h-65 {
  height: 65% !important;
}
.logo {
  max-width: 50% !important;
  max-height: 4vw !important;
}
.trans-x-inverse {
  transform: scaleX(-1);
}
.trans-y-inverse {
  transform: scaleY(-1);
}
.trans-scale-inverse {
  transform: scale(-1, -1);
}
.fs-l {
  font-size: larger;
}
.fs-sl {
  font-size: smaller;
}
.fs-12 {
  font-size: 12px;
}
</style>
