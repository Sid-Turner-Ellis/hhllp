function parseLanding(data) {
  data = data['landing_page_main_block'];

  return {
    mainBlock: {
      h1: data['landing_heading'],
      p: data['landing_text'],
      color: data['landing_main_image']['fallback_hex_color'],
      image: data['landing_main_image']['main_image'],
    },
  };
}

export default parseLanding;
