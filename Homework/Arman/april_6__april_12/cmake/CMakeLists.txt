#add_custom_target(really-clean
#     COMMAND "$(CMAKE)" --build "${CMAKE_BINARY_DIR}" clean
#       COMMAND cd "${CMAKE_BINARY_DIR}/otherproject" && make clean
#       )
cmake_minimum_reguired(VERSION 2.8) 

project(ChangeFile)


if(UNIX) BUILD_COMMAND make && make extra
    #    BUILD_COMMAND(
    #    make
    #   )
elseif(WIN32)
    BUILD_COMMAND(
        .\Makefile
        )
else
massage("Not found!")
endif()




