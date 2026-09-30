function useNumberFormat() {
        const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
      const arabicDigits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  return {
    isNumber:(n)=>{
      return persianDigits.includes(n) || arabicDigits.includes(n)

    },
    formatter: (n) => {
      if (n === null || n === undefined || n === "") return "";

      let numStr = String(n);
      for (let i = 0; i < arabicDigits.length; i++) {
        const regex = new RegExp(arabicDigits[i], "g");
        numStr = numStr.replace(regex, persianDigits[i]);
      }
      return numStr;
    },

    toNumber:(str)=>{
      // const n = str.replace();
      const n = str;
      let numStr = String(n);
      for (let i = 0; i < persianDigits.length; i++) {
        const regex = new RegExp(persianDigits[i], "g");
        numStr = numStr.replace(regex, arabicDigits[i]);
      }

      numStr = numStr.replace(",","");

      return parseInt(numStr);
    }
  };
}

export default useNumberFormat;