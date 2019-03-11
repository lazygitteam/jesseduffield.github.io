// // need to do this to stop an invalid check on window during build time
// exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
//   if (stage === 'build-html') {
//     actions.setWebpackConfig({
//       module: {
//         rules: [
//           {
//             test: /react-github-btn/,
//             use: loaders.null(),
//           },
//         ],
//       },
//     })
//   }
// }
