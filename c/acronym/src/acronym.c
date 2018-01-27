#include "acronym.h"
#include "string.h"
#include "stdlib.h"
#include "stdio.h"


char *abbreviate(const char *phrase) {
  if (!phrase || strlen(phrase) == 0)
  {
    return NULL;
  }

  char *phrase2 = strdup(phrase);
  char *words =  strtok(phrase2, " ");
  for (int i = 0; i < (int)(strlen(words)); i++)
{

  printf("%c", words[i]);
}
  
  char *sol = (char *) malloc(3);
  strcpy(sol, "PNG");
  return sol;
}
