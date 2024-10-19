import ffmpeg


def convert_to_mp4(input_file, output_file=None):
    if output_file is None:
        output_file = input_file.rsplit(".", 1)[0] + ".mp4"

    # Get the metadata, including the rotation
    probe = ffmpeg.probe(input_file)
    video_stream = next((stream for stream in probe['streams'] if stream['codec_type'] == 'video'), None)

    # Determine if rotation metadata and rotate
    if video_stream and 'tags' in video_stream and 'rotate' in video_stream['tags']:
        rotate_angle = int(video_stream['tags']['rotate'])
        if rotate_angle == 90:
            vf = 'transpose=1'  # 90 degrees clockwise
        elif rotate_angle == 180:
            vf = 'transpose=2'  # 180 degrees
        elif rotate_angle == 270:
            vf = 'transpose=2,transpose=2'  # 270 degrees clockwise
        else:
            vf = None  # No rotation
    else:
        vf = None  # No rotation metadata found

    # Build the ffmpeg command
    if vf:
        ffmpeg.input(input_file).output(
            output_file,
            vcodec='libx264',  # Video codec for MP4 output
            acodec='aac',      # Ensure audio is in AAC format for compatibility
            vf=vf              # Apply the calculated video filter for rotation
        ).run()
    else:
        # If no rotation is needed, process without the vf flag
        ffmpeg.input(input_file).output(
            output_file,
            vcodec='libx264',  # Video codec for MP4 output
            acodec='aac'       # Ensure audio is in AAC format for compatibility
        ).run()

