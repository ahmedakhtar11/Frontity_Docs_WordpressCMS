import Root from "./components"
import link from "@frontity/html2react/processors/link";
// import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'; 

const docsTheme = {
  name: "docs-theme",
  roots: {
    theme: Root,
  },
  state: {
    theme: {
      isUrlVisible: false,
      isChinese: false,
      isHome: false,
      isEnglishV1: true,
      isEnglishV2: false,
      isEnglishV3: false,
      isChineseV1: false,
      isChineseV2: false,
      isAuthenticated: false
    },
  },
  actions: {
    theme: {
      toggleUrl: ({ state }) => {
        state.theme.isUrlVisible = !state.theme.isUrlVisible
      },
      toggleChinese: ({ state }) => {
        state.theme.isChinese = true
      },
      toggleEnglish: ({ state }) => {
        state.theme.isChinese = false
      },
      toggleEnglishV1: ({ state }) => {
        state.theme.isEnglishV1 = true
      },
      toggleEnglishV2: ({ state }) => {
        state.theme.isEnglishV1 = false
      },
      toggleChineseV1: ({ state }) => {
        state.theme.isChineseV1 = false
      },
      toggleChineseV2: ({ state }) => {
        state.theme.isChineseV1 = true
      },
      toggleAuthentication: ({ state }) => {
        state.theme.isAuthenticated = true
      },
      toggleLogout: ({ state }) => {
        state.theme.isAuthenticated = false
      },
    },
  },
  libraries: {
    html2react: {
      processors: [link]
    }
  }
}

export default docsTheme