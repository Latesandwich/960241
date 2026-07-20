const students = [
  "682110159", "682110162", "682110163", "682110165", "682110167",
  "682110169", "682110171", "682110172", "682110174", "682110176",
  "682110177", "682110178", "682110180", "682110184", "682110185",
  "682110187", "682110196", "682110198", "682110199"
];

function GroupRandom(studentsList, n) {
    if (!studentsList || studentsList.length === 0 || n <= 0) return [];

    const shuffled = [...studentsList];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    const totalStudents = shuffled.length;
    
    
    const numGroups = Math.floor(totalStudents / n);

    
    if (numGroups === 0) {
        return [shuffled];
    }


    const groups = Array.from({ length: numGroups }, () => []);

    let currentIndex = 0;

    
    for (let i = 0; i < numGroups; i++) {
        for (let j = 0; j < n; j++) {
            groups[i].push(shuffled[currentIndex++]);
        }
    }

    
    let groupIndex = 0;
    while (currentIndex < totalStudents) {
        groups[groupIndex].push(shuffled[currentIndex++]);
        groupIndex = (groupIndex + 1) % numGroups; 
    }

    return groups;
}


const result = GroupRandom(students, 4);
console.log(result);