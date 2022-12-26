<template>
  <div class="login-view">
    <div class="backgound-img">
      <div class="context-container">
        <div class="context">
          <div class="context-header">
            <img
              class="context-header-icon"
              src="https://static.adobelogin.com/clients/behance-2020/4x_b431ffdf8fed1c95074548ecb9d4920e.png"
              alt="pofo-Logo"
            />
          </div>
          <p class="h1 mb-2 context-header-title">PoFo</p>
        </div>
      </div>
      <div class="login-content">
        <div class="email-page">
          <section class="login-section">
            <header class="login-header">
              <h1>로그인</h1>
            </header>
            <section class="login-form">
              <form action="" id="EmailForm">
                <div>
                  <p class="m-xs-0">
                    신규 사용자이신가요?
                    <a>계정 만들기</a>
                  </p>
                  <div class="input-email">
                    <label class="" for="">이메일 주소</label>
                    <input type="email" class="user-email-id" name="useremail">
                  </div>
                  <div class="divide-area"></div>
                  <div class="submit-button">
                    <button>
                      <span>계속</span>
                    </button>
                  </div>
                </div>
              </form>
              <div class="login-app-button">

              </div>
            </section>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
body {
  display: block;
  margin: 0%;
}

img {
  border-style: none;
}

.background-img {
  width: 100%;
  height: 100%;
  background-image: url('/background.jpeg');
}
.context-container {
  position: fixed;
}

.context-container {
  margin-left: 400px;
  display: flex;
  width: 400px;
  height: 100%;
  bottom: 0;
  align-items: center;
  -webkit-box-align: center;
  background-color: blue;
}

.context-header {
  margin-bottom: 8px;
}

.context {
  -webkit-box-flex: 1;
  width: 400px;
  flex-grow: 1;
  flex-basis: 1px;
  display: flex;
}

.context-header-icon {
  margin-right: 16px;
  height: 40px;
  float: left;
}

.context-header-title {
  font-size: 32px;
  color: #f4f4f4;
  float: left;
  margin: 0;
}

.login-content {
  width: 510px;
  height: 100%;
  background-color: red;
  margin-left: 900px;
  margin-top: 400px;
}
</style>
