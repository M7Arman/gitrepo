#makefile
Source := $(wildcard src/*.cpp)
obj := $(patsubst %.cpp,%.o,$(Source))


prog : $(obj)
	g++ $(obj) -o $@

obj : $(Source)
	g++ -c $(Source) -o $@

.PHONY : clean
clean : 
	rm -rf $(obj) prog


