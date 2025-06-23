<template>
	<div class="flex justify-center flex-wrap">
		<h1 class="text-2xl font-semibold text-center w-full mb-4">
			Login
		</h1>

		<div class="w-48 flex items-center flex-wrap gap-2">
			<AppAuthButton provider="github" class="bg-black text-white border-black">
				Github
			</AppAuthButton>

			<AppAuthButton provider="discord" class="bg-[#7785cc] text-white border-[#7785cc]">
				Discord
			</AppAuthButton>
		</div>
	</div>
</template>
