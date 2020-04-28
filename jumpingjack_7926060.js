// initialization of Three.js
function init() {
    // Check if WebGL is available see Three/examples
    // No need for webgl2 here - change as appropriate
    if (THREE.WEBGL.isWebGLAvailable() === false) {
        // if not print error on console and exit
        document.body.appendChild(THREE.WEBGL.getWebGLErrorMessage());
    }
    // add our rendering surface and initialize the renderer
    var container = document.createElement('div');
    document.body.appendChild(container);
    // WebGL2 examples suggest we need a canvas
    // canvas = document.createElement( 'canvas' );
    // var context = canvas.getContext( 'webgl2' );
    // var renderer = new THREE.WebGLRenderer( { canvas: canvas, context: context } );
    renderer = new THREE.WebGLRenderer();
    // set some state - here just clear color
    renderer.setClearColor(new THREE.Color(0x333333));
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);


    // All drawing will be organized in a scene graph
    var scene = new THREE.Scene();

    //Body Group
    var bodyGroup = new THREE.Group();
    scene.add(bodyGroup)
    var bodyMaterial = new THREE.MeshBasicMaterial({ color: 'black' });
    var bodyGeometry = new THREE.BoxGeometry(10, 15, 5);
    var body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    body.position.set(0, 0, 0);
    bodyGroup.add(body);
    
    //Tie
    var tieMaterial = new THREE.MeshBasicMaterial({color: 'white'});
    var tieGeometry = new THREE.BoxGeometry(1, 8, 0.5);
    var tie = new THREE.Mesh(tieGeometry, tieMaterial);
    tie.position.set(0, 3.5, 2.5);
    bodyGroup.add(tie);

    //Body buttons
    //upButton
    var upButtonMaterial = new THREE.MeshBasicMaterial({color: 'white'});
    var upButtonGeometry = new THREE.SphereGeometry(0.5, 32, 32);
    var upButton = new THREE.Mesh(upButtonGeometry, upButtonMaterial);
    upButton.position.set(0, -2.5, 2.5);
    bodyGroup.add(upButton);
    //downButton
    var downButtonMaterial = new THREE.MeshBasicMaterial({color: 'white'});
    var downButtonGeometry = new THREE.SphereGeometry(0.5, 32, 32);
    var downButton = new THREE.Mesh(downButtonGeometry, downButtonMaterial);
    downButton.position.set(0, -5, 2.5);
    bodyGroup.add(downButton);

    //Shoulders
    //Left Shoulder
    //LeftShoulderGroup
    var leftShoulderGroup = new THREE.Group();
    leftShoulderGroup.position.set(6, 6, 0);
    bodyGroup.add(leftShoulderGroup);
    //Left Shoulder Element
    var leftShoulderMaterial = new THREE.MeshBasicMaterial({ color: 'white' });
    var leftShoulderGeometry = new THREE.SphereGeometry(1, 32, 32);
    var leftShoulder = new THREE.Mesh(leftShoulderGeometry, leftShoulderMaterial);
    leftShoulderGroup.add(leftShoulder);
    //Right Shoulder
    //RightShoulderGroup
    var rightShoulderGroup = new THREE.Group();
    rightShoulderGroup.position.set(-6, 6, 0);
    bodyGroup.add(rightShoulderGroup);
    //Left Shoulder Element
    var rightShoulderMaterial = new THREE.MeshBasicMaterial({ color: 'white' });
    var rightShoulderGeometry = new THREE.SphereGeometry(1, 32, 32);
    var rightShoulder = new THREE.Mesh(rightShoulderGeometry, rightShoulderMaterial);
    rightShoulderGroup.add(rightShoulder);

    //Arms
    //Left Arm
    var leftArmMaterial = new THREE.MeshBasicMaterial({ color: 'grey' });
    var leftArmGeometry = new THREE.BoxGeometry(1.5, 8, 1.5);
    var leftArm = new THREE.Mesh(leftArmGeometry, leftArmMaterial);
    leftArm.position.set(0,-5,0);
    leftShoulderGroup.add(leftArm);
    //Right Arm
    var rightArmMaterial = new THREE.MeshBasicMaterial({ color: 'grey' });
    var rightArmGeometry = new THREE.BoxGeometry(1.5, 8, 1.5);
    var rightArm = new THREE.Mesh(rightArmGeometry, rightArmMaterial);
    rightArm.position.set(0,-5,0);
    rightShoulderGroup.add(rightArm);

    //Hands
    //Left Hand
    var leftHandMaterial = new THREE.MeshBasicMaterial({ color: "#743D2B" });
    var leftHandGeometry = new THREE.BoxGeometry(1.5, 1.5, 1.5);
    var leftHand = new THREE.Mesh(leftHandGeometry, leftHandMaterial);
    leftHand.position.set(0,-9.5,0);
    leftShoulderGroup.add(leftHand);
    //Right Hand
    var rightHandMaterial = new THREE.MeshBasicMaterial({ color: "#743D2B" });
    var rightHandGeometry = new THREE.BoxGeometry(1.5, 1.5, 1.5);
    var rightHand = new THREE.Mesh(rightHandGeometry, rightHandMaterial);
    rightHand.position.set(0,-9.5,0);
    rightShoulderGroup.add(rightHand);

    //Legs
    //Left leg group
    var leftLegGroup = new THREE.Group();
    leftLegGroup.position.set(-4, -8.5, 0);
    bodyGroup.add(leftLegGroup);
    //Left UpJoint
    var leftUpJointMaterial = new THREE.MeshBasicMaterial({ color: 'white' });
    var leftUpJointGeometry = new THREE.SphereGeometry(1, 32, 32);
    var leftUpJoint = new THREE.Mesh(leftUpJointGeometry, leftUpJointMaterial);
    leftLegGroup.add(leftUpJoint);
    //Left UpLeg
    var leftUpLegMaterial = new THREE.MeshBasicMaterial({ color: 'grey' });
    var leftUpLegGeometry = new THREE.BoxGeometry(1.5, 4, 1.5);
    var leftUpLeg = new THREE.Mesh(leftUpLegGeometry, leftUpLegMaterial);
    leftUpLeg.position.set(0,-3,0);
    leftLegGroup.add(leftUpLeg);
    //Left DownJoint
    var leftDownJointMaterial = new THREE.MeshBasicMaterial({ color: 'white' });
    var leftDownJointGeometry = new THREE.SphereGeometry(1, 32, 32);
    var leftDownJoint = new THREE.Mesh(leftDownJointGeometry, leftDownJointMaterial);
    leftDownJoint.position.set(0,-6,0);
    leftLegGroup.add(leftDownJoint);
    //Left legLowGroup
    var leftLegLowGroup = new THREE.Group();
    leftLegLowGroup.position.set(0, -6, 0);
    leftLegGroup.add(leftLegLowGroup);
    //Left DownLeg
    var leftDownLegMaterial = new THREE.MeshBasicMaterial({ color: 'grey' });
    var leftDownLegGeometry = new THREE.BoxGeometry(1.5, 4, 1.5);
    var leftDownLeg = new THREE.Mesh(leftDownLegGeometry, leftDownLegMaterial);
    leftDownLeg.position.set(0,-3,0);
    leftLegLowGroup.add(leftDownLeg);
    //leftfeet
    var leftFeetMaterial = new THREE.MeshBasicMaterial({ color: "black" });
    var leftFeetGeometry = new THREE.BoxGeometry(3, 1.5, 1.5);
    var leftFeet = new THREE.Mesh(leftFeetGeometry, leftFeetMaterial);
    leftFeet.position.set(-0.6,-5.8,0);
    leftLegLowGroup.add(leftFeet);
    //Right leg group
    var rightLegGroup = new THREE.Group();
    rightLegGroup.position.set(4, -8.5, 0);
    bodyGroup.add(rightLegGroup);
    //Right UpJoint
    var rightUpJointMaterial = new THREE.MeshBasicMaterial({ color: 'white' });
    var rightUpJointGeometry = new THREE.SphereGeometry(1, 32, 32);
    var rightUpJoint = new THREE.Mesh(rightUpJointGeometry, rightUpJointMaterial);
    rightLegGroup.add(rightUpJoint);
    //Right UpLeg
    var rightUpLegMaterial = new THREE.MeshBasicMaterial({ color: 'grey' });
    var rightUpLegGeometry = new THREE.BoxGeometry(1.5, 4, 1.5);
    var rightUpLeg = new THREE.Mesh(rightUpLegGeometry, rightUpLegMaterial);
    rightUpLeg.position.set(0,-3,0);
    rightLegGroup.add(rightUpLeg);
    //Right DownJoint
    var rightDownJointMaterial = new THREE.MeshBasicMaterial({ color: 'white' });
    var rightDownJointGeometry = new THREE.SphereGeometry(1, 32, 32);
    var rightDownJoint = new THREE.Mesh(rightDownJointGeometry, rightDownJointMaterial);
    rightDownJoint.position.set(0,-6,0);
    rightLegGroup.add(rightDownJoint);
    //Left legLowGroup
    var rightLegLowGroup = new THREE.Group();
    rightLegLowGroup.position.set(0, -6, 0);
    rightLegGroup.add(rightLegLowGroup);
    //Right DownLeg
    var rightDownLegMaterial = new THREE.MeshBasicMaterial({ color: 'grey' });
    var rightDownLegGeometry = new THREE.BoxGeometry(1.5, 4, 1.5);
    var rightDownLeg = new THREE.Mesh(rightDownLegGeometry, rightDownLegMaterial);
    rightDownLeg.position.set(0,-3,0);
    rightLegLowGroup.add(rightDownLeg);
    //Rightfeet
    var rightFeetMaterial = new THREE.MeshBasicMaterial({ color: "black" });
    var rightFeetGeometry = new THREE.BoxGeometry(3, 1.5, 1.5);
    var rightFeet = new THREE.Mesh(rightFeetGeometry, rightFeetMaterial);
    rightFeet.position.set(0.6,-5.8,0);
    rightLegLowGroup.add(rightFeet);

    //String Group
    var stringGroup = new THREE.Group();
    stringGroup.position.set(0, -8, 0);
    bodyGroup.add(stringGroup);
    //String
    var stringMaterial = new THREE.MeshBasicMaterial({color: 'red'});
    var stringGeometry = new THREE.BoxBufferGeometry(1, 25, 0.5);
    var string = new THREE.Mesh(stringGeometry, stringMaterial);
    stringGroup.add(string);
    //Marble
    var marbleMaterial = new THREE.MeshBasicMaterial({color: 'black'});
    var marbleGeometry = new THREE.SphereGeometry(1, 32, 32);
    var marble = new THREE.Mesh(marbleGeometry, marbleMaterial);
    //marbleMaterial.color.set('white');
    marble.position.set(0, -13, 0);
    stringGroup.add(marble);

    //neck
    var neckMaterial = new THREE.MeshBasicMaterial({color: 'black'});
    var neckGeometry = new THREE.CylinderBufferGeometry(1, 1, 1, 32);
    var neck = new THREE.Mesh(neckGeometry, neckMaterial);
    neck.position.set(0, 8, 0);
    bodyGroup.add(neck);

    //headGroup
    var headGroup = new THREE.Group();
    headGroup.position.set(0, 12, 0);
    bodyGroup.add(headGroup);
    //head
    var headMaterial = new THREE.MeshBasicMaterial({color: "#743D2B"});
    var headGeometry = new THREE.BoxGeometry(7, 7, 7);
    var head = new THREE.Mesh(headGeometry, headMaterial);
    headGroup.add(head);

    //left eye
    //leftWhite
    var leftWhiteMaterial = new THREE.MeshBasicMaterial({color: "white"});
    var leftWhiteGeometry = new THREE.BoxGeometry(2, 1, 0.5);
    var leftWhite = new THREE.Mesh(leftWhiteGeometry, leftWhiteMaterial);
    leftWhite.position.set(-1.5, 1, 3.5);
    headGroup.add(leftWhite);
    //leftBlack
    var leftBlackMaterial = new THREE.MeshBasicMaterial({color: 'black'});
    var leftBlackGeometry = new THREE.SphereGeometry(0.25, 50, 50);
    var leftBlack = new THREE.Mesh(leftBlackGeometry, leftBlackMaterial);
    leftBlack.position.set(-1.5, 1, 4);
    headGroup.add(leftBlack);
    //leftEyebrowse
    var leftEyebrowseMaterial = new THREE.MeshBasicMaterial({color: "black"});
    var leftEyebrowseGeometry = new THREE.BoxGeometry(2, 0.4, 0.5);
    var leftEyebrowse = new THREE.Mesh(leftEyebrowseGeometry, leftEyebrowseMaterial);
    leftEyebrowse.position.set(-1.5, 2, 3.5);
    headGroup.add(leftEyebrowse);

    //Right eye
    //rightWhite
    var rightWhiteMaterial = new THREE.MeshBasicMaterial({color: "white"});
    var rightWhiteGeometry = new THREE.BoxGeometry(2, 1, 0.5);
    var rightWhite = new THREE.Mesh(rightWhiteGeometry, rightWhiteMaterial);
    rightWhite.position.set(1.5, 1, 3.5);
    headGroup.add(rightWhite);
    //rightBlack
    var rightBlackMaterial = new THREE.MeshBasicMaterial({color: 'black'});
    var rightBlackGeometry = new THREE.SphereGeometry(0.25, 50, 50);
    var rightBlack = new THREE.Mesh(rightBlackGeometry, rightBlackMaterial);
    rightBlack.position.set(1.5, 1, 4);
    headGroup.add(rightBlack);
    //rightEyebrowse
    var rightEyebrowseMaterial = new THREE.MeshBasicMaterial({color: "black"});
    var rightEyebrowseGeometry = new THREE.BoxGeometry(2, 0.4, 0.5);
    var rightEyebrowse = new THREE.Mesh(rightEyebrowseGeometry, rightEyebrowseMaterial);
    rightEyebrowse.position.set(1.5, 2, 3.5);
    headGroup.add(rightEyebrowse);

    //nose
    var noseMaterial = new THREE.MeshBasicMaterial({color: "black"});
    var noseGeometry = new THREE.SphereGeometry(0.5, 32, 32);
    var nose = new THREE.Mesh(noseGeometry, noseMaterial);
    nose.position.set(0, -0.5, 3.5);
    headGroup.add(nose);

    //mouth
    var mouthMaterial = new THREE.MeshBasicMaterial({color: "black"});
    var mouthGeometry = new THREE.BoxGeometry(1, 0.4, 0.5);
    var mouth = new THREE.Mesh(mouthGeometry, mouthMaterial);
    mouth.position.set(0, -2, 3.5);
    headGroup.add(mouth);

    //hair
    var hairMaterial = new THREE.MeshBasicMaterial({color: "black"});
    var hairGeometry = new THREE.BoxGeometry(7, 3, 7);
    var hair = new THREE.Mesh(hairGeometry, hairMaterial);
    hair.position.set(0, 5, 0);
    headGroup.add(hair);
 
    // need a camera to look at things
    // calcaulate aspectRatio
    var aspectRatio = window.innerWidth / window.innerHeight;
    var width = 20;
    // Camera needs to be global
    camera = new THREE.PerspectiveCamera(45, aspectRatio, 1, 1000);
    // position the camera back and point to the center of the scene
    camera.position.z = 100;
    camera.lookAt(scene.position);

    // render the scene
    renderer.render(scene, camera);

    //declared once at the top of your code
    var camera_axis = new THREE.Vector3(-30,30,30).normalize(); // viewing axis

    //Pointer that follows where the camera is looking at
    var pointerMaterial = new THREE.MeshBasicMaterial({color: 'blue'});
    var pointerGeometry = new THREE.SphereGeometry(0.5, 32, 32);
    var pointer = new THREE.Mesh(pointerGeometry, pointerMaterial);
    pointer.position.set(camera.position.x, camera.position.y, 5);
    scene.add(pointer);
   
    //Variable to stop and start the animation
    var stop = 1;
    //Counter for the sine function
    var w = 0;
    //Variable to remove and add the pointer
    var addRemove = 1;

    // setup the control gui
    var controls = new function () {
    this.xHead = 0
        this.redraw = function () {
        };
    this.zHead = 0
        this.redraw = function () {
        };
    this.zCamera = 100
        this.redraw = function () {
        };
    this.yCamera = 0
        this.redraw = function () {
        };
    this.xCamera = 0
        this.redraw = function () {
        };
    this.xRoCamera = 0
        this.redraw = function () {
        };
    this.yRoCamera = 0
        this.redraw = function () {
        };
    this.stopStartAnim = function() {
        if (stop !== 0) {
            stop = 0;
            stringGroup.position.y = -8;
            w = 0;
            leftShoulderGroup.rotation.z = 0;
            rightShoulderGroup.rotation.z = 0;
            rightLegGroup.rotation.z = 0;
            leftLegGroup.rotation.z = 0;
        }
        else {
            stop = 1;
        }
    };
    this.addRemovePointer = function() {
        if (addRemove !==0) {
            scene.remove(pointer);
            addRemove = 0;
        }
        else {
            scene.add(pointer);
            addRemove = 1;
        }
    }
    }

    
    var gui = new dat.GUI();
    gui.add(controls, 'xHead', -24, 24).onChange(controls.redraw);
    gui.add(controls, 'zHead', -24, 24).onChange(controls.redraw);
    gui.add(controls, 'zCamera', 60, 140).onChange(controls.redraw);
    gui.add(controls, 'yCamera', -24, 24).onChange(controls.redraw);
    gui.add(controls, 'xCamera', -24, 24).onChange(controls.redraw);
    gui.add(controls, 'xRoCamera', 0, 2*(Math.PI)).onChange(controls.redraw);
    gui.add(controls, 'yRoCamera', 0, 2*(Math.PI)).onChange(controls.redraw);
    gui.add(controls, 'stopStartAnim').listen();
    gui.add(controls, 'addRemovePointer').listen();
    render();

    function render() {
    // render using requestAnimationFrame - register function
    requestAnimationFrame(render);

    speed = 2 ** controls.speed;
    //bodyGroup.rotation.y += 0.01*speed;

    other = controls.other;

    //Animation
    //Increment only when the animation is working
    if (stop == 1) {w = w+5;}
    //String Animation
    stringGroup.position.y += (-(0.10*Math.sin(w*0.01))) * stop;
    //Shoulder Animation
    leftShoulderGroup.rotation.z += (0.05*Math.sin((w)*0.01)) * stop;
    rightShoulderGroup.rotation.z += (-(0.05*Math.sin((w)*0.01))) * stop;
    //Leg Animation
    rightLegGroup.rotation.z += (0.03*Math.sin((w)*0.01)) * stop;
    leftLegGroup.rotation.z += (-(0.03*Math.sin((w)*0.01))) * stop;

    //Head controls
    xHead = controls.xHead / 100;
    zHead = controls.zHead / 124;
    headGroup.rotation.x = xHead;
    headGroup.rotation.z = zHead;


    //Camera controls
    zCamera = controls.zCamera;
    camera.position.z = zCamera;
    yCamera = controls.yCamera;
    camera.position.y = yCamera;
    pointer.position.y = yCamera;
    xCamera = controls.xCamera;
    camera.position.x = xCamera;
    pointer.position.x = xCamera;

    //Rotation controls
    xRoCamera = controls.xRoCamera;
    bodyGroup.rotation.x = xRoCamera;
    yRoCamera = controls.yRoCamera;
    bodyGroup.rotation.y = yRoCamera;
    
    renderer.render(scene, camera);
    }

}



function onResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    // If we use a canvas then we also have to worry of resizing it
    renderer.setSize(window.innerWidth, window.innerHeight);
}

window.onload = init;

// register our resize event function
window.addEventListener('resize', onResize, true);
//render();





