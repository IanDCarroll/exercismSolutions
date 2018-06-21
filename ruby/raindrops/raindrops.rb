class Raindrops
  def self.convert(number)
    if number == 3
      return "Pling"
    elsif number == 5
      return "Plang"
    elsif number == 7
      return "Plong"
    end

    number.to_s
  end
end
