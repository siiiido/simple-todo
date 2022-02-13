import "styled-components";

declare module "styled-components" {
  export type ButtonnContainer = {
    margtinTop: string;
  };
  export type Button = {
    background?: string;
    color?: string;
  };
  export type Checked = {
    checked: boolean;
  };
  export type DefaultTheme  = {
    mainBackground: string, //메인 배경
    headerTextColor: string //  header 글자 색
    textBackground: string, // 글 적는 곳 배경
    containerText: string, // todo list, container 글자 색깔
    toggleBackground: string, // 다크, 라이트 모드 hover 색깔
    toggleText: string, // 다크 모드 글자가 라이트 모드로 바뀌는 것
    emojiBtn: string, // +버튼, delete 버튼 색깔
    emojiHover: string
    
};
}
