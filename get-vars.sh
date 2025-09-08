export VULKAN_SDK=/home/nikos/github.com/vulkan-related/external/lunarg/1.4.355.0/x86_64
env | sort > before.env
source /home/nikos/github.com/vulkan-related/external/lunarg/1.4.355.0/setup-env.sh
env | sort > after.env
diff -u before.env after.env | grep '^+' | cut -c2- > sdk-vars.txt
rm before.env after.env