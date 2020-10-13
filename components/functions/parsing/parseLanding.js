function parseLanding(inData) {
  const data = inData['landing_page_main_block'];
  const sumData = inData['sum_block'];
  const twoData = inData['two_block'];


  return {
    mainBlock: {
      h1: data['landing_heading'],
      p: data['landing_text'],
      color: data['landing_main_image']['fallback_hex_color'],
      image: data['landing_main_image']['main_image'],
    },
    sumBlock: {
      h2: sumData['heading'],
      desc: sumData['desc'],
      subBlock: sumData['summary_sub_block'].map((v) => {
        return { label: v.desc, url: v.icon.url, lot: v.lottie };
      }),
    },
    twoBlock:{
      subBlocks:twoData['sub_two_block'].map((obj)=>{
        return { h2:obj['heading'], text:obj['text'],color:obj['background_color_hex'] }
      })
    }
  };
}

export default parseLanding;
