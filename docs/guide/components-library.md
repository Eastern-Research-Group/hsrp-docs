# Initiate Shared Components Library

HSRP apps use a shared components library: [hsrp-components](https://github.com/Eastern-Research-Group/hsrp-components). It is a npm package listed as a dependency for each app. In order to actively develop in the shared components library while seeing changes immediately without having to re-publish to npm, follow these steps:

1. Clone the hsrp-components library locally. It will be simpler if it is cloned in the same parent directory as your HSRP apps. `git clone https://github.com/Eastern-Research-Group/hsrp-components.git`
2. Run npm link from the app's `client` directory to create a symlink from node_modules to the locally cloned version of hsrp-components. Use the relative or absolute path of the cloned hsrp-components directory. For example, if the HSRP apps and hsrp-components are located in the same parent directory, run `npm link ../../hsrp-components` from `radar/client` and `i-waste/client`.

After these steps, you can test and confirm this worked by editing a component file within your local hsrp-components directory and see the changes reflected in your local radar and/or i-waste instance.