<template>
	<div class="main-upload">
		<header class="m-main-header">
			<input type="button" name="" value="上传图片" @click="open()"/>
		</header>
		<div class="row" id="row">
			<div class="small-12 small-centered medium-8 columns">
				<div class="panel m-panel shadow">
					<div class="row collapse">
						<div class="small-12 columns">
							<header class="form-header">
								<h2>上传图片<span @click="close()">×</span></h2>

							</header>
						</div>
					</div>
					<div class="row">
						<div class="small-12 columns">
							<!-- action需要url -->
							<form method="post" action="">
								<!-- 描述信息 -->
								<div class="row">
									<div class="small-4 columns">
										<p class="notice">图片描述</p>
									</div>
									<div class="small-8 columns">
										<div class="form-group-material">
											<!-- <label class="material-label" for="name"></label> -->
											<input class="material-field" id="name" required="required" type="text" placeholder="必填字段"/>
										</div>
									</div>
								</div>

								<!-- 图片上传 -->
								<div class="upload">
									<!-- <img src="./upload.png" alt=""> -->
									<input type="file" @change="getFile($event)">
								</div>
								<!-- 提交 -->
								<div class="row">
									<div class="small-12 small-push-4 columns">
										<!-- <button>提交</button> -->
										<input type="submit" value="submit" />
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

</template>

<script>
	export default {
		data() {
			return {
				file: ''
			}
		},
		methods: {
			getFile(e) {
				this.file = e.target.files[0];
				console.log(this.file);
			},
			close() {
				let uploadForm = document.querySelector("#row");
				uploadForm.style.display = 'none';
			},
			open() {
				let uploadForm = document.querySelector("#row");
				uploadForm.style.display = 'block';
			}

		},
		created() {

		}
	}
</script>

<style>
	@import url("https://cdn.jsdelivr.net/foundation/5.5.0/css/foundation.css");
	body {
	    font: 1em/1.45 Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif;
	}
	
	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
	    font-family: Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif;
	    font-weight: 300;
	}
	
	a {
	    color: #4527A0;
	}
	
	a:hover {
	    color: #7E57C2;
	}
	
	.m-main-header {
	    background: #4527A0;
	    min-height: 120px;
	}
	
	.shadow {
	    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.3);
	}
	
	.m-panel {
	    border: 0;
	    background: #ffffff;
	    /* margin-top: -50px; */
	    border-top: 5px solid #7E57C2;
	}
	
	.form-group-material {
	    position: relative;
	    margin-top: 16px;
	    margin-bottom: 26px;
	}
	
	.form-group-material:after {
	    height: 1px;
	    background: #e6e6e6;
	    width: 100%;
	}
	
	.form-group-material:before {
	    height: 2px;
	    background: #E91E63;
	    z-index: 1;
	    width: 0;
	    -webkit-transition: width 0.3s;
	    transition: width 0.3s;
	}
	
	.form-group-material:after,
	.form-group-material:before {
	    display: block;
	    content: "";
	    position: absolute;
	    bottom: 0;
	}
	
	.form-group-material.error {
	    margin-bottom: 36px;
	}
	
	.form-group-material.error:before {
	    background-color: #F44336;
	}
	
	.form-group-material.focused:before {
	    width: 100%;
	}
	
	.error small.error {
	    position: absolute;
	    background: transparent;
	    color: #F44336;
	    font-style: normal;
	    padding-left: 0;
	}
	
	.material-label {
	    display: block;
	    width: 100%;
	    position: absolute;
	    top: 50%;
	    -webkit-transform: translateY(-50%);
	    -ms-transform: translateY(-50%);
	    transform: translateY(-50%);
	    line-height: 1;
	    cursor: text;
	    color: #b3b3b3;
	    -webkit-transition: -webkit-transform ease 0.3s, color ease 0.3s;
	    transition: transform ease 0.3s, color ease 0.3s;
	    -webkit-transform-origin: 0 0;
	    -ms-transform-origin: 0 0;
	    transform-origin: 0 0;
	}
	
	.error .material-label {
	    color: #F44336;
	}
	
	.focused .material-label {
	    -webkit-transform: translateY(-220%) scale(0.82);
	    -ms-transform: translateY(-220%) scale(0.82);
	    transform: translateY(-220%) scale(0.82);
	    color: #E91E63;
	}
	
	.error.focused .material-label {
	    color: #F44336;
	}
	
	.has-value .material-label {
	    -webkit-transform: translateY(-220%) scale(0.82);
	    -ms-transform: translateY(-220%) scale(0.82);
	    transform: translateY(-220%) scale(0.82);
	}
	
	input.material-field,
	textarea.material-field {
	    border-width: 0;
	    padding-left: 0;
	    padding-right: 0;
	    box-shadow: none;
	    margin: 0;
	    background: transparent;
	}
	
	input.material-field:focus,
	textarea.material-field:focus {
	    box-shadow: none;
	    background: none;
	}
	
	button {
	    border-radius: 3px;
	    padding: 8px 18px;
	    font-family: Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif;
	    background: #E91E63;
	}
	
	button:hover {
	    background: #f27ba3;
	}
	
	p.notice {
	    font-size: 13px;
	    color: #6f6f6f;
	    margin-top: 26px;
	}
	
	.form-header h2 {
	    margin-bottom: 20px;
	}
	
	.form-header h2 span {
	    float: right;
	}
	
	.form-header h2 span:hover {
	    cursor: default;
	    background-color: #eee;
	}
	
	.credits {
	    font-size: 13px;
	}
	
	/* 上传表单 */
	#row {
		position: fixed;
		left: calc((100% - 1000px) / 2);
	}
	
	/* 图片上传 */
	
	.upload {
	    height: 100px;
	    width: 100%;
	    /* background-color: pink; */
	    margin-bottom: 10px;
	}
	
	.upload input {
		font-size: 16px;
		/* margin-top: 20px; */
		line-height: 100px;
		color: #AAAAAA;
	}
</style>
