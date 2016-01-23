import generateMain from "../src/generateMain";

(async function (){
  let html = await generateMain()
  console.log("generated Main page: ", html);
})()
