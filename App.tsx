import React from 'react';

const App = () => {
  // @ts-ignore
  return (
    <>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet" type="text/css" href="css/reset.css?20230921" />
      <link rel="stylesheet" type="text/css" href="css/uikit.css" />
      <link rel="stylesheet" type="text/css" href="css/video.css" />
      <link rel="stylesheet" type="text/css" href="css/style.css" />
      <title>비디오 레이아웃</title>
      <div className="v_container">
        <div className="v_video">
          <video
              id="videoElement"
              className="videoElement"
              preload="metadata"
          >
            <source src="images/video/svideo.mp4" type="video/mp4" />
            브라우저가 비디오 태그를 지원하지 않습니다.
          </video>
          <div className="v_top_icons">
            <a href="20검색.html" className="vticon">
              <span uk-icon="icon: searchTop; ratio: 1.5" />
            </a>
            <a href="23-2알림.html" className="vticon">
              <span uk-icon="icon: alam;ratio: 1.5" />
              <em className="circle_bg_blue">52</em>
            </a>
          </div>
          {/*비디오 약간어둡게*/}
          <div id="videoOverlay" />
        </div>
        <div className="v_bottom_nav">
          <ul>
            <li>
              <a href="#" className="vsicon">
                <span uk-icon="icon: bottomOn01;">
                  <i className="sr-only">숏폼</i>
                </span>
              </a>
            </li>
            <li>
              <a href="#" className="vsicon">
                <span uk-icon="icon: bottom02;">
                  <i className="sr-only">우승예측</i>
                </span>
              </a>
            </li>
            <li className="mcircle">
              <a href="#" className="vsicon">
                {" "}
                <em uk-icon="icon: bottom03;">
                  <i className="sr-only">촬영</i>
                </em>
              </a>
            </li>
            <li>
              <a href="#" className="vsicon">
                <span uk-icon="icon: bottom04;">
                  <i className="sr-only">팬</i>
                </span>
              </a>
            </li>
            <li>
              <a href="#" className="vsicon">
                <span uk-icon="icon: bottom05;">
                  <i className="sr-only">마이페이지</i>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="v_contents">
        <ul>
          <li className="v_con_info">
            <div className="v_img">
              <a href="#none">
                <img src="images/thum.jpg" />
              </a>
            </div>
            <div className="v_grup">
              <a href="#none">Hong Dae</a>
            </div>
            <div>
              <button type="button" id="subscribe-button" className="v_button">
                팬
              </button>
            </div>
          </li>
          <li className="v_con_tit">
            홍대 댄스 여신 준비된 아이돌 데뷔 임박{" "}
            <span>#홍대여신 #아이돌 연습생들 #홍대 #댄스여신들</span>{" "}
          </li>
          <li className="v_con_name">@홍대여신</li>
        </ul>
      </div>
      <div className="v_side_icons">
        <a href="#none" className="vsicon">
          <span uk-icon="icon: side01; ratio: 1.1" />
          심사하기
        </a>
        <a href="33-2우승예측.html" className="vsicon">
          <span uk-icon="icon: side02; ratio: 1.2" />
          <em className="new_bg">new</em>우승예측
        </a>
        <a href="#none" id="Btn-comment" className="vsicon">
          <span uk-icon="icon: side03; ratio: 1.2" className="check_on" />
          77<i className="sr-only">댓글</i>
          <em uk-icon="icon: v_check; ratio: 1.3" className="circle_check" />
        </a>
        <a href="#none" className="vsicon">
          <span uk-icon="icon: side04; ratio: 1.2" className="check_on" />
          33 <i className="sr-only">즐겨찾기</i>
          <em uk-icon="icon: v_check; ratio: 1.3" className="circle_check" />
        </a>
        <a href="#none" className="vsicon">
          <span uk-icon="icon: side05; ratio: 1.2" />
          22<i className="sr-only">공유</i>
        </a>
        <a href="#none" className="vsicon">
          <span uk-icon="icon: side06; ratio: 1.1" />
          음악사용
        </a>
        <a href="#none" className="vsicon main-more" id="main-toggle">
          <span uk-icon="icon: more;" />
          <div id="main-toggle-con">
            <button type="button" data-uk-toggle="#modal-group-1">
              신고하기
            </button>
          </div>
        </a>
      </div>
      {/*댓글 관련*/}
      {/* 영상댓글 모달 */}
      <div id="bottom-modal" className="bmodal">
        {/* Modal content */}
        <div className="bottom-modal top-radius">
          <div className="uk-modal-header top-radius relative">
            <span uk-icon="icon: close" className="bbtn-close" />
            <h2 className="uk-modal-title uk-text-center">영상 댓글</h2>
          </div>
          <div className="bttom-modal-con">
            <div className="ch-bbs-bx">
              <ul className="ch-inner">
                <li className="ch-bbs-list">
                  <div className="chbbslist-img red-circle">
                    <img src="images/thum/face02.jpg" />
                  </div>
                  <div className="chbbslist-bx">
                    <div className="chbbslist-name">
                      team member A<span>3일 전</span>
                      <em id="pan-toggle" uk-icon="icon: more-vertical">
                        <div id="pan-toggle-con">
                          <a href="#modal-group-1" uk-toggle="">
                            신고하기
                          </a>
                        </div>
                      </em>
                    </div>
                    <div className="chbbslist-text">
                      <a href="#none">
                        <p>반갑습니다.</p>
                      </a>
                    </div>
                  </div>
                </li>
                <li className="ch-bbs-list">
                  <div className="chbbslist-img gray-circle">
                    <img src="images/thum/face01.jpg" />
                  </div>
                  <div className="chbbslist-bx">
                    <div className="chbbslist-name">
                      team member B<span>3일 전</span>
                      <em>
                        <a
                            href="#modal-center"
                            className="c_gray"
                            uk-toggle=""
                            uk-icon="icon: close"
                        />
                      </em>
                    </div>
                    <div className="chbbslist-text">
                      <a href="#none">
                        <p>환영합니다.</p>
                      </a>
                    </div>
                  </div>
                </li>
                <li className="ch-bbs-list" id="targetDiv">
                  <div className="chbbslist-img">
                    <img src="images/thum/grup01.jpg" />
                  </div>
                  <div className="chbbslist-bx">
                    <div className="chbbslist-name">
                      different team<span>3일 전</span>
                      <em>
                        <a href="#none" className="c_red" uk-icon="icon: close" />
                      </em>
                    </div>
                    <div className="chbbslist-text">
                      <a href="#none">
                        <p>뭐라고 심한말.</p>
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="uk-modal-footer">
            <div className="msg-send">
              <div className="msg-send-img">
                <img src="images/thum/face01.jpg" />
              </div>
              <div className="msg-send-inp">
                <div className="uk-inline w100">
                  <a
                      className="uk-form-icon uk-form-icon-flip on"
                      href="#"
                      uk-icon="icon: send"
                  />
                  <input
                      className="uk-input"
                      type="text"
                      aria-label="Clickable icon"
                      placeholder="글씨가 적혀있으면 class on"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*신고하기 모달 pan*/}
      <div id="modal-group-1" uk-modal="">
        <div className="uk-modal-dialog">
          <button className="uk-modal-close-default" type="button" uk-close="" />
          <div className="uk-modal-header">
            <h2 className="uk-modal-title">신고하기</h2>
          </div>
          <div className="uk-modal-body" uk-overflow-auto="">
            <div className="flex-column">
              <label className="pb10">
                <input
                    className="uk-radio"
                    type="radio"
                    name="radio"
                />
                <span className="pl5">음란/성적</span>
              </label>
              <label className="pb10">
                <input className="uk-radio" type="radio" name="radio" />
                <span className="pl5">폭력/괴롭힘</span>
              </label>
              <label className="pb10">
                <input className="uk-radio" type="radio" name="radio" />
                <span className="pl5">위험/혐오</span>
              </label>
              <label className="pb10">
                <input className="uk-radio" type="radio" name="radio" />
                <span className="pl5">표절/권리 침해</span>
              </label>
              <textarea
                  className="uk-textarea bdgray"
                  rows={5}
                  placeholder="내용"
                  aria-label="Textarea"
                  defaultValue={""}
              />
            </div>
          </div>
          <div className="uk-modal-footer uk-text-right">
            <button
                className="uk-button uk-button-default uk-modal-close"
                type="button"
            >
              취소
            </button>
            <button className="uk-button uk-button-primary" type="button">
              신고
            </button>
          </div>
        </div>
      </div>
      {/*삭제하기*/}
      <div id="modal-center" className="uk-flex-top" uk-modal="">
        <div className="uk-modal-dialog uk-modal-body uk-margin-auto-vertical">
          <button className="uk-modal-close-default" type="button" uk-close="" />
          <div className="uk-modal-body uk-text-center mb20 mt20">
            <p uk-icon="icon: warning; ratio: 2" className="c_red" />
            <p>삭제 하시겠습니까?</p>
          </div>
          <div className="uk-modal-footer uk-text-center">
            <button
                className="uk-button uk-button-default uk-modal-close"
                type="button"
            >
              취소
            </button>
            <button className="uk-button uk-button-danger" type="button">
              삭제
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;