cmake_minimum_required(VERSION 3.30)

set_property(GLOBAL PROPERTY USE_FOLDERS ON)

project("StelAR Vulkan lib" VERSION 0.0.1 LANGUAGES C CXX)

set(CMAKE_CXX_STANDARD 20)
set(CMAKE_CXX_STANDARD_REQUIRED ON)
set(CMAKE_EXPORT_COMPILE_COMMANDS ON)
set(CMAKE_RUNTIME_OUTPUT_DIRECTORY ${CMAKE_BINARY_DIR}/bin)

find_package(Vulkan REQUIRED SPIRV-Tools glslang)
include(FetchContent)
set(FETCHCONTENT_QUIET OFF)
include(CMakePrintHelpers)

#include_directories(${Vulkan_INCLUDE_DIR})
message(STATUS "Vulkan_INCLUDE_DIR: ${Vulkan_INCLUDE_DIR}")
#link_directories(${Vulkan_INCLUDE_DIR}/../lib)

#FILE(COPY ${Vulkan_INCLUDE_DIR}/vulkan/vulkan.h  ${Vulkan_INCLUDE_DIR}/vulkan/vk_platform.h DESTINATION ${CMAKE_BINARY_DIR})
#FILE(COPY ${Vulkan_INCLUDE_DIR}/../../config/vk_layer_settings.txt  DESTINATION ${CMAKE_BINARY_DIR})

add_compile_definitions(VK_NO_PROTOTYPES)
add_compile_definitions(VK_USE_PLATFORM_XCB_KHR)

add_executable(00_setup
    00_setup.cpp
    vulkan_base.cpp vulkan_base.h
    vulkan_functions.cpp vulkan_functions.h vulkan_functions_list.incl
)
target_compile_definitions(00_setup PRIVATE VK_NO_PROTOTYPES)
if(MSVC)
    target_compile_options(00_setup PRIVATE /W4 /WX)
else()
    target_compile_options(00_setup PRIVATE -Wall -Wextra -pedantic -Werror)
endif()
target_link_libraries(00_setup PRIVATE Vulkan::Vulkan)
target_include_directories(00_setup PRIVATE ${CMAKE_BINARY_DIR} ${Vulkan_INCLUDE_DIR} ${Vulkan_INCLUDE_DIR}/vulkan)