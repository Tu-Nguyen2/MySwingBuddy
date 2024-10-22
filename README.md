# MySwingBuddy

MySwingBuddy is a project that allows the user to login using AWS amplify, to access their account where they will be able to upload videos of themselves swinging a golf club. Over the duration of the video the user will get their 


## Required Software
* Node.js (version 20.17.0 or higher)
* Angular CLI (version 18.2.6 or higher)
* AWS Amplify CLI (version 12.13.0)
* Python 3.9 or higher
* FFmpeg (installed and added to PATH)

### Installations and Configuration After Cloning - Web Component
Once the repo is cloned, `cd` into where `MySwingBuddy` is cloned. The next step is installing dependencies and other tools that will be needed to run all code.

`npm install` will install Node.js dependencies for the project.

`npm install -g @aws-amplify/cli` will now install the Amplify CLI, this allows us to push the project and connect an AWS account to manage user login

With these two tools installed, you are now ready to connect an AWS account, within the root directory of the project run `amplify init` to stage the project

### Installations and Configuration After Cloning - YOLO
Currently the packages being used for video playback control and any transformations to the data itself can be found in under `YOLO_object_detection`, these require OpenCV and FFmpeg in order to function these can be installed by running:

`pip install opencv-python`
`pip install ffmpeg-python`

*Make sure that after installing both of these have their path setup properly and MySwingBuddy can see those pathes.

## Usage

Run `ng serve` for a dev server, since the project is locally hosted this will be the only way to run the project. The project will be accessable at [http://localhost:4200](http://localhost:4200)