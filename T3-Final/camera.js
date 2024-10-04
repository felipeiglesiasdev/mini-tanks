import * as THREE from 'three';

export function updateCamera(camera, playerTank) {

    if (playerTank.cameraOn) {
        // Posição atual do tanque
        let tankPosition = new THREE.Vector3();
        playerTank.object.getWorldPosition(tankPosition);
        // Definir uma altura fixa para a câmera
        const fixedHeight = 50;  // Altura constante da câmera
        camera.position.y = fixedHeight;
        camera.position.z = 80;
        // Movimentação no eixo X (a câmera translada conforme o tanque se move no eixo X)
        camera.position.x = tankPosition.x;
        // Fazer a câmera sempre olhar para o tanque
        camera.lookAt(tankPosition);
    }
    playerTank.loadScene = true
}


export function handleZoom(camera, zoomIn, orbit) {
    const zoomSpeed = 2; 
    const direction = camera.getWorldDirection(new THREE.Vector3());

    if (zoomIn) {
        camera.position.addScaledVector(direction, -zoomSpeed);
    } else {
        camera.position.addScaledVector(direction, zoomSpeed);
    }

    orbit.update(); // Atualiza os controles após mover a câmera
}


