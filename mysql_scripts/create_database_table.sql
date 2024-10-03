CREATE DATABASE My_Swing_Buddy;
USE My_Swing_Buddy;

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
 -- This is the table that will store, and access the S3 bucket
CREATE TABLE videos_training_data (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    s3_url VARCHAR(255) NOT NULL,
    upload_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    duration INT,
    user_id INT
    -- FOREIGN KEY (user_id) REFERENCES users(id)
);