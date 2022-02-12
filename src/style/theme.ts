import { DefaultTheme } from 'styled-components'

export const lightTheme: DefaultTheme = {
	mainBackground: "#FFFFFF", //메인 배경
	headerTextColor: "#000000", //  header 글자 색
	textBackground: "#F9F7F1", // 글 적는 곳 배경
	containerText: "#262223", // todo list, container 글자 색깔
	toggleBackground: "#2E2E2E", // 다크, 라이트 모드 hover 배경 색깔
	toggleText: "#C1C1C1", // 다크, 라이트 모드 hover 글자 색d
	// plusBtn: string, // +버튼 색깔
}

export const darkTheme: DefaultTheme = {
	mainBackground: "#2E2E2E", //메인 배경
	headerTextColor: "#FFFFFF", //  header 글자 색
	textBackground: "#57595D", // 글 적는 곳 배경
	containerText: "#C1C1C1", // todo list, container 글자 색깔
	toggleBackground: "#FFFFFF", // 다크, 라이트 모드 hover 색깔
	toggleText: "#000000", // 다크 모드 글자가 라이트 모드 색로 바뀌는 것
	// plusBtn: string, // +버튼 색깔
}