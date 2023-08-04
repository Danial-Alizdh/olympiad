import os
import re

def rename_files_with_regex(directory_path):
    # Regular expression pattern to match files with '*.*?ver=*' pattern
    regex_pattern = r'(.*\..*?)\?ver=.*'

    # Walk through all directories and subdirectories
    for root, dirs, files in os.walk(directory_path):
        for file in files:
            # Check if the file matches the regex pattern
            match = re.match(regex_pattern, file)
            if match:
                # Extract the new file name without the '?ver=*' part
                new_file_name = match.group(1)

                # Construct the old and new file paths
                old_file_path = os.path.join(root, file)
                new_file_path = os.path.join(root, new_file_name)

                # Rename the file
                os.rename(old_file_path, new_file_path)
                print(f"Renamed {file} to {new_file_name}")

# Replace 'your_directory_path' with the actual path of the directory containing the files
directory_path = '/home/danial/Downloads/olympiadaraku.ir/'
rename_files_with_regex(directory_path)
