<?php
	$rdata = array_map('to_utf8', array_map('safe_html', array_map('html_attr_tags_ok', $rdata)));
	$jdata = array_map('to_utf8', array_map('safe_html', array_map('html_attr_tags_ok', $jdata)));
?>
<script>
	$j(function() {
		var tn = 'historico_vt';

		/* data for selected record, or defaults if none is selected */
		var data = {
			VcrIdBarVe: <?php echo json_encode(['id' => $rdata['VcrIdBarVe'], 'value' => $rdata['VcrIdBarVe'], 'text' => $jdata['VcrIdBarVe']]); ?>,
			VcrIdCom: <?php echo json_encode(['id' => $rdata['VcrIdCom'], 'value' => $rdata['VcrIdCom'], 'text' => $jdata['VcrIdCom']]); ?>,
			VcrIdCorr: <?php echo json_encode(['id' => $rdata['VcrIdCorr'], 'value' => $rdata['VcrIdCorr'], 'text' => $jdata['VcrIdCorr']]); ?>
		};

		/* initialize or continue using AppGini.cache for the current table */
		AppGini.cache = AppGini.cache || {};
		AppGini.cache[tn] = AppGini.cache[tn] || AppGini.ajaxCache();
		var cache = AppGini.cache[tn];

		/* saved value for VcrIdBarVe */
		cache.addCheck(function(u, d) {
			if(u != 'ajax_combo.php') return false;
			if(d.t == tn && d.f == 'VcrIdBarVe' && d.id == data.VcrIdBarVe.id)
				return { results: [ data.VcrIdBarVe ], more: false, elapsed: 0.01 };
			return false;
		});

		/* saved value for VcrIdCom */
		cache.addCheck(function(u, d) {
			if(u != 'ajax_combo.php') return false;
			if(d.t == tn && d.f == 'VcrIdCom' && d.id == data.VcrIdCom.id)
				return { results: [ data.VcrIdCom ], more: false, elapsed: 0.01 };
			return false;
		});

		/* saved value for VcrIdCorr */
		cache.addCheck(function(u, d) {
			if(u != 'ajax_combo.php') return false;
			if(d.t == tn && d.f == 'VcrIdCorr' && d.id == data.VcrIdCorr.id)
				return { results: [ data.VcrIdCorr ], more: false, elapsed: 0.01 };
			return false;
		});

		cache.start();
	});
</script>

