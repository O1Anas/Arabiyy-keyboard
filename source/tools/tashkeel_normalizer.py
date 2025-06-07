import re
import os

def normalize_tashkeel(text):
    """
    Normalize Arabic text according to specific tashkeel rules.
    """
    
    # Create a copy of the text to work with
    normalized = text
    
    # Rule 1: Remove sukoon
    normalized = re.sub(r'ْ', '', normalized)
    
    # Rule 2: Remove kasra before ya' without tashkeel
    normalized = re.sub(r'ِ(?=ي[^ًٌٍََُِّ])', '', normalized)
    
    # Rule 3: Remove damma before waw without tashkeel
    normalized = re.sub(r'ُ(?=و[^ًٌٍََُِّ])', '', normalized)
    
    # Rule 4: Remove fatha before alif without hamza
    normalized = re.sub(r'َ(?=ا[^ًٌٍََُِّ])', '', normalized)
    
    # Rule 5: Remove fatha before ta' marbuta
    normalized = re.sub(r'َ(?=ّ?ة[ًٌٍََُِّ]?)', '', normalized)
    
    # Rule 6: Remove fatha before alif maqsura OR before 'shadda + alif maqsura'
    normalized = re.sub(r'َ(?=ّ?ى[^ًٌٍََُِّ]?)', '', normalized)
    
    # Rule 7: Remove kasra after alif with hamza below
    normalized = re.sub(r'إِ', 'إ', normalized)
    
    # Rule 8: Fix alif variants at start of lines or after numbers
    normalized = re.sub(r'(^|\d\.\s*)اُ', r'\1أُ', normalized, flags=re.MULTILINE)
    normalized = re.sub(r'(^|\d\.\s*)اِ', r'\1إ', normalized, flags=re.MULTILINE)
    normalized = re.sub(r'(^|\d\.\s*)اَ', r'\1أ', normalized, flags=re.MULTILINE)
    
    # Rule 9: Remove all tashkeel on alif
    normalized = re.sub(r'ا[ًٌٍَُِ]', 'ا', normalized)
    
    # Rules 10, 11, 12: Remove tashkeel before/after specific contexts (MERGED)
    # This combines all the positional tashkeel removal rules
    positional_patterns = [
        # Rule 10: Remove all tashkeel at end of line (including before markdown and punctuation)
        (r'[ًٌٍََُِ]+(?=\s*[*:]*\s*$)', '', re.MULTILINE),
        
        # Rule 11: Remove tanween at end of title-like text
        (r'[ًٌٍ](?=\s*\]\s*$)', '', re.MULTILINE),
        
        # Rule 12: Remove all tashkeel before punctuation marks
        # Extended to include all your specified punctuation: ?, :, !, {, }, [, ], |, ", ', *, ?, ;
        (r'[ًٌٍََُِ]+(?=\s*[.،\[\](){}|:"\';!?*؟])', '', 0),
    ]
    
    # Rule 13: Remove space between و and ا at start of lines or after spaces
    normalized = re.sub(r'(^|\s)و ا', r'\1وا', normalized, flags=re.MULTILINE)
    
    for pattern, replacement, flags in positional_patterns:
        if flags:
            normalized = re.sub(pattern, replacement, normalized, flags=flags)
        else:
            normalized = re.sub(pattern, replacement, normalized)
    
    # Rule 14: Remove all tashkeel at end of sentence (except tanween and shadda)
    # Handle sentence endings separately to preserve tanween and shadda
    sentences = re.split(r'([.،])', normalized)
    
    # Process each sentence part
    for i in range(0, len(sentences), 2):
        if i + 1 < len(sentences):  # If there's a punctuation mark
            # Remove only non-tanween, non-shadda tashkeel before punctuation
            sentences[i] = re.sub(r'[َُِ](?=[^ًٌٍََُِّ]*[.،])', '', sentences[i])
    
    # Join the sentences back together
    normalized = ''.join(sentences)
    
    return normalized

def process_file(file_path):
    """Process a file and return its normalized content."""
    try:
        with open(file_path, 'r', encoding='utf-8') as file:
            content = file.read()
        return normalize_tashkeel(content)
    except FileNotFoundError:
        print(f"Error: File '{file_path}' not found.")
        return None
    except Exception as e:
        print(f"Error processing file: {str(e)}")
        return None

def save_output(text, original_path=None):
    """Save the normalized text to a file."""
    if original_path:
        # If processing a file, save to a new file with '_normalized' suffix
        base, ext = os.path.splitext(original_path)
        output_path = f"{base}{ext}"
    else:
        # If processing direct text, save to 'normalized_output.txt'
        output_path = "normalized_output.txt"
    
    try:
        with open(output_path, 'w', encoding='utf-8') as file:
            file.write(text)
        print(f"\nNormalized text has been saved to: {output_path}")
    except Exception as e:
        print(f"Error saving output: {str(e)}")

def main():
    print("Arabic Tashkeel Normalizer")
    print("=" * 30)
    
    while True:
        print("\nChoose input type:")
        print("1. Process a file")
        print("2. Enter text directly")
        print("3. Exit")
        
        choice = input("\nEnter your choice (1-3): ").strip()
        
        if choice == "1":
            file_path = input("\nEnter the path to your file: ").strip()
            normalized_text = process_file(file_path)
            if normalized_text:
                print("\nNormalized text:")
                print("-" * 40)
                print(normalized_text)
                print("-" * 40)
                save_output(normalized_text, file_path)
        
        elif choice == "2":
            print("\nEnter your text (press Ctrl+D on Unix or Ctrl+Z on Windows + Enter to finish):")
            lines = []
            try:
                while True:
                    line = input()
                    lines.append(line)
            except EOFError:
                pass
            
            text = '\n'.join(lines)
            normalized_text = normalize_tashkeel(text)
            
            print("\nNormalized text:")
            print("-" * 40)
            print(normalized_text)
            print("-" * 40)
            
            save_output(normalized_text)
        
        elif choice == "3":
            print("\nGoodbye!")
            break
        
        else:
            print("\nInvalid choice. Please try again.")

if __name__ == "__main__":
    main()