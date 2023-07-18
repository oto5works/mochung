export default {
	namespaced: true,
	state: {
		openDrawer: true
	},

	mutations: {
		setDrawer(state, drawerState) {
			state.openDrawer = drawerState;
		}
	}
};
