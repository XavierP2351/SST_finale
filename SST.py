import time
import datetime
from datetime import timedelta

class Planet:
    def __init__(self, hours, days, name): #earth hours in a day: earth days in a year: name
        self.hours = hours  # Earth hours in a day
        self.days = days    #Earth days in a year
        self.name = name    #planet/moon name
        self.place_year = self.days * 24    #Earth hours in a year

    def __str__(self):
        return f'{self.name} - Hours: {self.hours:,}, Days in a year: {self.days:,}'


#inner planets
Earth = Planet(24,365, 'Earth')
Mercury = Planet(1408,88, 'Mercury')
Venus = Planet(5832, 225, 'Venus')
Mars = Planet(25, 687,'Mars')
inner_planets = [Earth, Mercury, Venus, Mars]

#outer planets
Juipter = Planet(10,4333,'Jupiter')
Saturn = Planet(11,10759,'Saturn')
Uranus = Planet(17,30687,'Uranus')
Neptune = Planet(16,60190,'Neptune')
outer_planets = [Juipter, Saturn, Uranus, Neptune]

day_chosen = datetime.datetime.now() # default and for testing sake
# datetime.timedelta(days=0, seconds=0, microseconds=0, milliseconds=0, minutes=0, hours=0, weeks=0)
class Conversion:
    converted_day = None
    def __init__(self, days1, hours1, minutes1, chosen):
        self.minutes1 = minutes1
        self.hours1 = hours1
        self.days1 = days1
        day=chosen
        self.converted_day_added = day + timedelta(days=days1,hours=hours1,minutes=minutes1)
        self.converted_day_minus = day - timedelta(days=days1,hours=hours1,minutes=minutes1)

#inner planets (except earth)
mer_convert_add, mer_convert_min = Conversion(7,8,0,day_chosen).converted_day_added, Conversion(7,8,0,day_chosen).converted_day_minus
ven_convert_add, ven_convert_min = Conversion(10,3,0,day_chosen).converted_day_added, Conversion(10,3,0,day_chosen).converted_day_minus
mars_convert_add, mars_convert_min = Conversion(0,1,0,day_chosen).converted_day_added, Conversion(0,1,0,day_chosen).converted_day_minus

#outer planets
jup_convert_add, jup_convert_min = Conversion(0,10,0,day_chosen).converted_day_added, Conversion(0,10,0,day_chosen).converted_day_minus
sat_convert_add, sat_convert_min = Conversion(0,11,0,day_chosen).converted_day_added, Conversion(0,11,0,day_chosen).converted_day_minus
ura_convert_add, ura_convert_min = Conversion(0,17,0,day_chosen).converted_day_added, Conversion(0,17,0,day_chosen).converted_day_minus
nep_convert_add, nep_convert_min = Conversion(0,16,0,day_chosen).converted_day_added, Conversion(0,16,0,day_chosen).converted_day_minus

#moons: days, hours, minutes, day_chosen
the_moon = Earth

phobos = Conversion(0,7,39,day_chosen).converted_day_minus
deimos = Conversion(0,30,17,day_chosen).converted_day_minus

ganymede = Conversion(7,0,0,day_chosen).converted_day_minus
callisto = Conversion(17,0,0,day_chosen).converted_day_minus
io = Conversion(0,1020,0,day_chosen).converted_day_minus

titan = Conversion(15,22,0,day_chosen).converted_day_minus
hyperion = Conversion(0,511,12,day_chosen).converted_day_minus
enceladus = Conversion(0,789,36,day_chosen).converted_day_minus

umbriel = Conversion(0,98,24,day_chosen).converted_day_minus
titania = Conversion(0,208,57,day_chosen).converted_day_minus
oberon = Conversion(0,324,30,day_chosen).converted_day_minus

triton = Conversion(0,140,56,day_chosen).converted_day_minus
proteus = Conversion(0,26,54).converted_day_minus

#Astroids
bunnu = Conversion(435,0,0,day_chosen).converted_day_minus