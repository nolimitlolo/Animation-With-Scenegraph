Winter 2020: CSI4130
Assignment 1
Due: Friday, January 31st, 2020, 11:00pm in Virtual Campus
University of Ottawa - Universit´e d’Ottawa
Jochen Lang

1 Animation with Scenegraph [10 in total]
In this assignment, you will build a jumping jack toy and implement an interactive animation
based on a scenegraph in Three.js. Your animation will have to follow a very similar approach to
the Solar animation lab. For the purpose of this assignment, you are asked to use basic geometric
shapes directly available in Three.js such as boxes, cylinders and spheres.
This is an individual assignment. You are not allowed to use any other library except Three.js
and dat.gui.js.

1.1 Toy Character [4]
Build a simple stick figure resembling a jumping jack toy. Your stick figure must be build as a
scenegraph in Three.js with at least 17 separare primitives, i.e., cylinders, spheres or ellipses.
An example of a jumping jack toy is shown in Figure 1. The minimum primitives are feet, lower
legs, upper legs, torso, left and right arms, hands, neck, head, nose, two buttons on torso, string
and marble. Your program must show the jumping jack figure in the inactive pose at start-up.
The root node of your figure has to be the torso. The jumping jack in the picture looks 2D but
your character is to be a 3D character. Provide controls with corresponding sliders in dat.gui to
control the head by the user. The head has to be able to move right/left and forward/backward.
Place the stick figure in the middle of the window.

1.2 Camera Control [3]
Use dat.gui sliders for two angles to control the pose of the camera and for the position in 3D
where the camera is directed to (the at position). The angles must be rotating the camera in a
sphere aroud the at point. Select the radius of the sphere large enough such that it is outside your
scene. In other words, your perspective camera will always need to look at the at point and your
rotational controls will need to move your camera on a sphere around the at point. In order to
make the control more intuitive, use dat.gui to turn on the display of a small sphere shown at the
at point.

1.3 Animation [3]
Use a similar strategy than in the Solar example to make the legs and arms of the jumping jack
toy move as the string with its marble is moved up and down. (Hint: A sine or cosine function
may be helpful). Use dat.gui to give the user the option to switch the animation on and off.