class Utility {
  
  async priceTextToNumber(text) {
    const value = parseFloat(text.replace(/[$,]/g, ""));
    return value;
  }

    async convertTextToNumber(text) {
      const value = parseFloat(text.replace(/[Item total: $,]/g, ""));
      return value;
    }

    async textToNumber(text) {
      const value = parseFloat(text.replace(/[Total: $,]/g, ""));
      return value;
    }
}

module.exports = new Utility();