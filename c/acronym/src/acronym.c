#include "acronym.h"
#include "string.h"
#include "stdlib.h"
#include "stdio.h"
// #include "iostream"
// using std::cout;

char *abbreviate(const char *phrase) {
  // if (!phrase || strlen(phrase) == 0)
  // {
  //   return NULL;
  // }
  //
  // char *acronym = "";
  // for (int i = 0; i < (int)strlen(phrase); i++) {
  //   if (i == 0 || phrase[i-1] == (char)32) {
  //     acronym += phrase[i];
  //   }
  // }
  // printf("%c\n", *acronym);
  // return acronym;

  char *mfk_ptr = "Buffer";
  int iter = 0;
  // strcpy(mfk_ptr, phrase);
  for (int i = 1; i < 100; i++) {
    *mfk_ptr++ = phrase[0];
    // mfk_ptr++;
    iter ++;
  }
  *mfk_ptr = '\0';
  // cout << phrase;

  return mfk_ptr;
}
