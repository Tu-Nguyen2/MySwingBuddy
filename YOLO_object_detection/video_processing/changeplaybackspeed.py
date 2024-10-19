import ffmpeg


def slow_down_video(input_video, output_video=None, slow_factor=0.25):
    # Set the default output video name if not provided
    if output_video is None:
        output_video = input_video.rsplit('.', 1)[0] + '_slow.mp4'

    # Video filter: slow down by changing the presentation timestamp (PTS)
    video_filter = f"setpts={1 / slow_factor}*PTS"

    # Apply only the video filter (since there's no audio)
    ffmpeg.input(input_video).output(
        output_video,
        vf=video_filter
    ).run()

    print(f"Slowed down video saved as: {output_video}")



