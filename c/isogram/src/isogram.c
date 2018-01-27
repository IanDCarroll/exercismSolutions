#include "isogram.h"
#include "stdio.h"
#include "string.h"
#include "ctype.h"

const char* to_uppercase(const char phrase[]);

bool is_excluded(char character);

bool is_duplicate(const char phrase[], int i, int j);

bool is_isogram(const char phrase[]) {
  const char *upper_phrase = to_uppercase(phrase);
  int phrase_length = strlen(phrase);

  for(int i = 0; i < phrase_length; i++)
  {
    for(int j = 0; j < phrase_length; j++)
    {
      if(!is_excluded(upper_phrase[i]) && is_duplicate(upper_phrase, i, j))
      {
         return false;
      } 
    }
  }

  return true;
}

const char* to_uppercase(const char phrase[]) {
  char *upper_phrase = strdup(phrase);
  for(int i = 0; i < (int)(strlen(phrase)); i++)
  {
    upper_phrase[i] = toupper(phrase[i]);
  }
  return upper_phrase;
}

bool is_excluded(char character) {
  const char *excluded_chars = "- ";
  return strchr(excluded_chars, character);
}

bool is_duplicate(const char phrase[], int i, int j) {
  return (phrase[i] == phrase[j]) && (i != j);
}
