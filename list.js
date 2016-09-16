(function () {
    angular.module("tigerquiz")
        .controller("listctrl", listcontroller);

    function listcontroller(){
        var vm = this;
        vm.data = tigerfacts;
        vm.activeTiger = {};
        vm.changeActiveTiger = changeActiveTiger;

        function changeActiveTiger(index){
            vm.activeTiger = index;
        }
    }
        var tigerfacts = [{
           type: "Siberian tigers",
           location: "North Asia: China and Siberia",
           image_url: "https://upload.wikimedia.org/wikipedia/commons/c/c6/Siberian_Tiger_sf.jpg",
               size: " Males:190 to 230 cm ,180 to 306 kg females:160 to 180 cm, 100 to 167 kg ",
               description: "Compared to other subspecies, Siberian tigers have thicker coats, paler hues, and fewer stripes in dark brown instead of black"
        },
        {
            type: "Bengal tiger",
            location: "South Asia: Bangladesh, Bhutan, India and Nepal",
            image_url: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Tigerramki.jpg",
            size: "Males:270 to 310 cm ,180 to 258 kg females:240 to 265 cm, 100 to 160 kg ",
            description:"Coat colour varies from light yellow to reddish yellow with black stripes"
        },
{
    type: "Indochinese tiger",
    location: "Southeast Asia: Laos, Myanmar, Thailand and Vietnam",
    image_url: "https://upload.wikimedia.org/wikipedia/commons/d/d8/Panthera_tigris_corbetti_%28Tierpark_Berlin%29_832-714-%28118%29.jpg",
    size: "Males:270 cm ,150 to 195 kg females:96 cm, 100 to 130 kg ",
    description: "Due to the size and power of the Indochinese tiger, it has no natural predators in its native environment"
},
{
    type: "Malayan tiger",
    location: "Southeast Asia: Malaysia; extinct in Thailand and Singapore",
    image_url: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Tiger_in_the_water.jpg",
    size: "Males:190 to 280 cm ,47 to 130 kg females:180 to 260 cm, 24 to 88 kg ",
    description: "Malayan tigers prey on sambar deer, barking deer, wild boar, Bornean bearded pigs and serow. Malayan tigers also prey on sun bear, young elephants and rhino calves. Whether their principal prey includes adult gaur and tapir is unknown."
},
{
    type: "South China tiger ",
    location: "East Asia",
    image_url: "https://upload.wikimedia.org/wikipedia/commons/8/81/2012_Suedchinesischer_Tiger.JPG",
    size: "Males:230 to260 cm ,130 to 180 kg females: 220 to 240 cm, 100 to 110 kg ",
    description: "The South China tiger is considered to be the most ancient of the tiger subspecies and is distinguished by a particularly narrow skull, long muzzle nose, rhombus-like stripes and vivid orange colour"
},
{
    type: "Sumatran tiger",
    location: "South Asia: Bangladesh, Bhutan, India and Nepal",
    image_url: "https://upload.wikimedia.org/wikipedia/commons/6/62/Panthera_tigris_sumatran_subspecies.jpg",
    size: "Males:220 to 255 cm ,100 to 140 kg females:215 to 230 cm, 75 to 100 kg ",
    description: "Sumatran Tigers are big cats with narrow stripes on the orange to dark reddish coat. The Sumatran Tiger is darker than other subspecies and is the smallest of Panthera tigris. It has a few adaptations that help it live in deep jungles. Thus, the species has long whiskers that improve the senses of the animal."
}
        ]
})();
