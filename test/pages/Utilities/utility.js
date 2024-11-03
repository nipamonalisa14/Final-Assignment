class Utility {
    async convertTextToNumber(text) {
      const value = parseFloat(text.replace(/[Item total: $,]/g, ""));
      return value;
    }
}

module.exports = new Utility();