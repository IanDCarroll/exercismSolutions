class Complement
  @rna_nucleotides = {"G" => "C", "C" => "G", "T" => "A", "A" => "U"}

  def self.of_dna(dna_strand)
    dna_strand.split("").map do |dna_nucleotide|
      rna_nucleotide = to_rna(dna_nucleotide)
      return "" if (rna_nucleotide.nil?)
      rna_nucleotide
    end.join
  end

  def self.to_rna(dna_nucleotide)
    @rna_nucleotides[dna_nucleotide]
  end
end
