declare module '@woocommerce/e2e-utils';
declare module '@woocommerce/e2e-environment';
declare module '@woocommerce/settings';
declare module '@woocommerce/tracks';
declare module '@wordpress/components/build/ui' {
	// Typescript seems unable to resolve this correctly by default, so we need to re-export it in our type defs.
	export * from '@wordpress/components/build-types/ui';
}
declare module 'gridicons/dist/*' {
	const value: React.ElementType< {
		size?: 12 | 18 | 24 | 36 | 48 | 54 | 72;
		onClick?: ( event: MouseEvent | KeyboardEvent ) => void;
	} >;
	export default value;
}
declare module '*.png';
declare module '*.jpg';
declare module '*.svg';
