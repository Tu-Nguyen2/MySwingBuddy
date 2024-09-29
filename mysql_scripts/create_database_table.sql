CREATE DATABASE 'My_Swing_Buddy';
USE 'My_Swing_Buddy';

CREATE TABLE video_data_points(
	video_id INT NOT NULL,
    x_position DOUBLE NOT NULL,
    y_poisition DOUBLE NOT NULL,
    confidence_score DOUBLE NOT NULL,
    PRIMARY KEY (video_id)
);

CREATE TABLE pre_video_process(
	video_id INT NOT NULL,
	user_id INT NOT NULL
);

CREATE TABLE user_video(
	user_id INT NOT NULL,
    #user video goes here
    video_id INT NOT NULL,
    PRIMARY KEY (user_id)
);