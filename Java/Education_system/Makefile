SOURCE := $(wildcard person/*.java)
BINSOURCE := $(wildcard *.java)
#OBJ := $(patsubst %.java,%.class,$(Source))
OBJ := person/*.class
BIN := *.class
JC := javac

compile: $(SOURCE) $(BINSOURCE)
	$(JC) $(SOURCE) $(BINSOURCE)


clean : 
	    rm $(OBJ) $(BIN)



