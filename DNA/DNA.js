const DNAStrand = (dna) => {

  const strand = dna.split("").map((item) => {
    switch (item) {
      case "T":
        return "A";
      case "A":
        return "T";
      case "C":
        return "G";
      case "G":
        return "C";
      default:
        return "";
    }
  });

  return strand.join("");
};
