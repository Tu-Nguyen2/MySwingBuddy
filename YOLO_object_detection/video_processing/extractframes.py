import cv2
import os


def extract_frames(video_path, output_folder, frames_per_second=8):
    # Open the video file
    cap = cv2.VideoCapture(video_path)

    # Get the video FPS (frames per second)
    fps = cap.get(cv2.CAP_PROP_FPS)
    print(f"Video FPS: {fps}")

    # Calculate the interval for frame extraction (in frames)
    frame_interval = int(fps / frames_per_second)

    frame_id = 0
    extracted_frame_count = 0

    # Create the output folder if it doesn't exist
    os.makedirs(output_folder, exist_ok=True)

    while cap.isOpened():
        ret, frame = cap.read()
        if not ret:
            break

        # Save frame every 'frame_interval' frames
        if frame_id % frame_interval == 0:
            frame_filename = os.path.join(output_folder, f"frame_{extracted_frame_count}.jpg")
            cv2.imwrite(frame_filename, frame)
            extracted_frame_count += 1
            print(f"Extracted frame {extracted_frame_count} at frame ID {frame_id}")

        frame_id += 1

    cap.release()
    print(f"Total frames extracted: {extracted_frame_count}")

