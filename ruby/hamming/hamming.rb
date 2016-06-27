class Hamming
    def self.compute strand_1, strand_2
	count = 0
	if strand_1.length != strand_2.length
	    throw ArgumentError
	end
	strand_1.length.times do |i| 
	    if strand_1[i] != strand_2[i]
	        count += 1 
	    end
	end
	count
    end
end

module BookKeeping
   VERSION = 3
end


#Paired solution with Anuj More! @execat
