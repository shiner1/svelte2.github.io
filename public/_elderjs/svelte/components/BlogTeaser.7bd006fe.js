import { e as element, t as text, s as space, c as claim_element, a as children, b as claim_text, d as detach_dev, f as claim_space, g as attr_dev, h as add_location, i as insert_dev, j as append_dev, k as set_data_dev, n as noop, l as dispatch_dev, v as validate_slots, S as SvelteComponentDev, m as init, o as safe_not_equal } from '../index-cdc510d1.js';

/* src\components\BlogTeaser.svelte generated by Svelte v3.38.3 */

const file = "src\\components\\BlogTeaser.svelte";

function create_fragment(ctx) {
	let div;
	let a;
	let t0_value = /*blog*/ ctx[0].frontmatter.title + "";
	let t0;
	let a_href_value;
	let t1;
	let p;
	let t2_value = /*blog*/ ctx[0].frontmatter.excerpt + "";
	let t2;

	const block = {
		c: function create() {
			div = element("div");
			a = element("a");
			t0 = text(t0_value);
			t1 = space();
			p = element("p");
			t2 = text(t2_value);
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			a = claim_element(div_nodes, "A", { href: true });
			var a_nodes = children(a);
			t0 = claim_text(a_nodes, t0_value);
			a_nodes.forEach(detach_dev);
			t1 = claim_space(div_nodes);
			p = claim_element(div_nodes, "P", {});
			var p_nodes = children(p);
			t2 = claim_text(p_nodes, t2_value);
			p_nodes.forEach(detach_dev);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(a, "href", a_href_value = /*helpers*/ ctx[1].permalinks.blog({ slug: /*blog*/ ctx[0].slug }));
			add_location(a, file, 6, 2, 83);
			add_location(p, file, 7, 2, 169);
			attr_dev(div, "class", "entry");
			add_location(div, file, 5, 0, 61);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			append_dev(div, a);
			append_dev(a, t0);
			append_dev(div, t1);
			append_dev(div, p);
			append_dev(p, t2);
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*blog*/ 1 && t0_value !== (t0_value = /*blog*/ ctx[0].frontmatter.title + "")) set_data_dev(t0, t0_value);

			if (dirty & /*helpers, blog*/ 3 && a_href_value !== (a_href_value = /*helpers*/ ctx[1].permalinks.blog({ slug: /*blog*/ ctx[0].slug }))) {
				attr_dev(a, "href", a_href_value);
			}

			if (dirty & /*blog*/ 1 && t2_value !== (t2_value = /*blog*/ ctx[0].frontmatter.excerpt + "")) set_data_dev(t2, t2_value);
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("BlogTeaser", slots, []);
	let { blog } = $$props;
	let { helpers } = $$props;
	const writable_props = ["blog", "helpers"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<BlogTeaser> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ("blog" in $$props) $$invalidate(0, blog = $$props.blog);
		if ("helpers" in $$props) $$invalidate(1, helpers = $$props.helpers);
	};

	$$self.$capture_state = () => ({ blog, helpers });

	$$self.$inject_state = $$props => {
		if ("blog" in $$props) $$invalidate(0, blog = $$props.blog);
		if ("helpers" in $$props) $$invalidate(1, helpers = $$props.helpers);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [blog, helpers];
}

class BlogTeaser extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { blog: 0, helpers: 1 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "BlogTeaser",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*blog*/ ctx[0] === undefined && !("blog" in props)) {
			console.warn("<BlogTeaser> was created without expected prop 'blog'");
		}

		if (/*helpers*/ ctx[1] === undefined && !("helpers" in props)) {
			console.warn("<BlogTeaser> was created without expected prop 'helpers'");
		}
	}

	get blog() {
		throw new Error("<BlogTeaser>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set blog(value) {
		throw new Error("<BlogTeaser>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get helpers() {
		throw new Error("<BlogTeaser>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set helpers(value) {
		throw new Error("<BlogTeaser>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default BlogTeaser;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmxvZ1RlYXNlci43YmQwMDZmZS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvQmxvZ1RlYXNlci5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cbiAgZXhwb3J0IGxldCBibG9nO1xuICBleHBvcnQgbGV0IGhlbHBlcnM7XG48L3NjcmlwdD5cblxuPGRpdiBjbGFzcz1cImVudHJ5XCI+XG4gIDxhIGhyZWY9e2hlbHBlcnMucGVybWFsaW5rcy5ibG9nKHsgc2x1ZzogYmxvZy5zbHVnIH0pfT57YmxvZy5mcm9udG1hdHRlci50aXRsZX08L2E+XG4gIDxwPntibG9nLmZyb250bWF0dGVyLmV4Y2VycHR9PC9wPlxuPC9kaXY+XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O3lCQU0wRCxHQUFJLElBQUMsV0FBVyxDQUFDLEtBQUs7Ozs7O3lCQUMxRSxHQUFJLElBQUMsV0FBVyxDQUFDLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tEQURuQixHQUFPLElBQUMsVUFBVSxDQUFDLElBQUksR0FBRyxJQUFJLFdBQUUsR0FBSSxJQUFDLElBQUk7Ozs7Ozs7Ozs7Ozs7OzsrREFBTSxHQUFJLElBQUMsV0FBVyxDQUFDLEtBQUs7O21GQUFyRSxHQUFPLElBQUMsVUFBVSxDQUFDLElBQUksR0FBRyxJQUFJLFdBQUUsR0FBSSxJQUFDLElBQUk7Ozs7K0RBQzlDLEdBQUksSUFBQyxXQUFXLENBQUMsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FOakIsSUFBSTtPQUNKLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
