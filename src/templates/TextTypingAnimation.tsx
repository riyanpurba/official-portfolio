/* eslint-disable no-undef */
import { FC, useEffect, useRef, useState } from "react";

interface TextTypingAnimationProps {
  texts: string[];
  className?: string;
}

const TextTypingAnimation: FC<TextTypingAnimationProps> = (props) => {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDelete, setIsDelete] = useState(false);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const displayedTextRef = useRef<string>("");

  useEffect(() => {
    if (props.texts?.length !== 0) {
      const isEmptyDisplay = displayedTextRef.current === "";
      // to extra delay to show the full text
      const shouldDelayNextProcess =
        isDelete &&
        displayedTextRef.current.length === props.texts[textIndex].length;

      displayedTextRef.current = props.texts[textIndex].substr(0, charIndex);

      timeoutRef.current = setTimeout(() => {
        if (isDelete && isEmptyDisplay) {
          // when finishing the deletion of the current text, start displaying the next text index
          // if it's the last index already, start the first text index
          setIsDelete(false);
          setTextIndex((prevTextIndex) =>
            prevTextIndex + 1 < props.texts.length ? prevTextIndex + 1 : 0
          );
        } else if (
          isDelete ||
          displayedTextRef.current === props.texts[textIndex]
        ) {
          // if the current text is displayed fully OR on deletion process,
          // decrease the sub-string index of the current text to start the deletion process
          setIsDelete(true);
          setCharIndex((prevSubIndex) =>
            prevSubIndex !== -1 ? prevSubIndex - 1 : 0
          );
        } else if (
          !isDelete &&
          displayedTextRef.current !== props.texts[textIndex]
        ) {
          // if it is not on the deletion process and the full text has not been displayed yet
          // increase the sub-string index of the current text
          setCharIndex((prevCharIndex) =>
            prevCharIndex + 1 <= props.texts[textIndex].length
              ? prevCharIndex + 1
              : 0
          );
        }
      }, shouldDelayNextProcess ? 1500 : 150 - Math.random() * 100);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [props.texts, charIndex, textIndex, isDelete]);

  return (
    <p className={props.className}>
      {displayedTextRef.current}
      <span className="cursor">|</span>
    </p>
  );
};

export default TextTypingAnimation;
