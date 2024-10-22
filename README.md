# MySwingBuddy

MySwingBuddy is a project that allows the user to login using AWS amplify, to access their account where they will be able to upload videos of themselves swinging a golf club. Over the duration of the video the user will have the points on the video, where the head of the golf club travels throughout the duration, mapped and the video will be returned to the user. The user will then be able to take notes on their swing, as well as being able to see what professional players are doing for that type of swing (based on research of what professional golfers do for their swing). Each video has the orignal video saved, and there is a version of the video that allows for the user to see the original swing and the overlay for that swing. 


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

With these two tools installed, you are now ready to connect an AWS account, within the root directory of the project run `amplify init` to stage the project. When a project is ready to be pushed to Amplify, run `Amplify Push` and this will send the project to AWS, where it will manage the user login and create userpools for that AWS account. To see the configuration of the tools added in (i.e. auth, storage, hosting, etc.) all tools that are run with `Amplify add <tool name>` will appear under the `Amplify` folder.

Within the `src` folder there are the components and pages for the web application, these are organized by what the function of the page is and they route between eachother.

### Installations and Configuration After Cloning - YOLO
Currently the packages being used for video playback control and any transformations to the data itself can be found in under `YOLO_object_detection`, these require OpenCV and FFmpeg in order to function these can be installed by running:

`pip install opencv-python` and `pip install ffmpeg-python`

*Make sure that after installing both of these have their path setup properly and MySwingBuddy can see those pathes.

## Usage

Run `ng serve` for a dev server, since the project is locally hosted this will be the only way to run the project. The project will be accessable at [http://localhost:4200](http://localhost:4200).