function dogYears(planet , second ){
    const earthOrbital = 31557600
    const dogRef = 7
    const planets = {
        earth : 1,
        mercury : 0.2408467,
        venus : 0.61519726,
        mars : 1.8808158,
        jupiter : 11.862615,
        saturn : 29.447498,
        uranus : 84.016846,
        neptune : 164.79132,

    }
    const cal = second / (earthOrbital*planets[planet])
    const cal2 = cal * dogRef
    return Number(cal2.toFixed(2))
}

a

console.log(dogYears("earth", 1000000000)); // Should output 221.82
console.log(dogYears("mercury", 1000000000)); // Should output 921.3
console.log(dogYears("venus", 1000000000)); // Should output 360.59