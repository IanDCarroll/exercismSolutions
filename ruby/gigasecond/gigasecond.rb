require 'date'
require 'time'

class Gigasecond
  ONE_BILLION = 1000000000

  def self.from(time)
    unixEpochSeconds = time.to_i
    gigasecond = unixEpochSeconds + ONE_BILLION
    Time.at(gigasecond).utc
  end
end
