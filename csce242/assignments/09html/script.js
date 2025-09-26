document.getElementById("drawBtn").onclick = () => {
    // Clear the scene
    const scene = document.getElementById('scene');
    scene.innerHTML = '';
    
    // Get current hour to determine day/night
    const now = new Date();
    const hour = now.getHours();
    const isNight = hour >= 18 || hour < 6; 
    
    // Set background based on time of day
    const body = document.body;
    if (isNight) {
        body.classList.add('night-mode');
        body.style.backgroundColor = '#1a1a2e';
    } else {
        body.classList.remove('night-mode');
        body.style.backgroundColor = '#87CEEB'; 
    }
    
    // Loop for 6 clouds 
    for (let i = 0; i < 6; i++) {
        const cloud = document.createElement('div');
        cloud.className = 'cloud';
        cloud.style.left = (i * 150 + 50) + 'px';
        cloud.style.top = (50 + Math.random() * 50) + 'px';
        scene.appendChild(cloud);
    }
    
    // Loop for 6 trees 
    for (let i = 0; i < 6; i++) {
        const tree = document.createElement('div');
        tree.className = 'tree';
        tree.style.left = (i * 150 + 80) + 'px';
        tree.style.bottom = '20px';
        const trunk = document.createElement('div');
        trunk.className = 'tree-trunk';
        tree.appendChild(trunk);
        const leaves = document.createElement('div');
        leaves.className = 'tree-leaves';
        tree.appendChild(leaves);
        scene.appendChild(tree);
    }
    
    // Sun or Moon based on time
    const sunorMoon = document.createElement('div');
    if (isNight) {
        sunorMoon.className = 'moon';
    } else {
        sunorMoon.className = 'sun';
    }
    scene.appendChild(sunorMoon);
};