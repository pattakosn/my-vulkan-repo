// SDK/Config/vk_layer_settings.txt
// export VK_INSTANCE_LAYERS=VK_LAYER_LUNARG_api_dump:VK_LAYER_LUNARG_standard_validation 
// setx VK_INSTANCE_LAYERS VK_LAYER_LUNARG_api_dump;VK_LAYER_LUNARG_core_validation

#include <iostream>
#include <cstdlib>
#include "vulkan_base.h"

int main(void) {
    try {
        stelar::init();
        std::cout << "Vulkan Runtime library loaded successfully." << std::endl;
    } catch (const std::exception& e) {
        std::cerr << "Error during Vulkan initialization: " << e.what() << std::endl;
        return EXIT_FAILURE;
    }
    stelar::deinit();
    return EXIT_SUCCESS;
}